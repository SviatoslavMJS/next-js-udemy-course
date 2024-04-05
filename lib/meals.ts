"use server";
import xss from "xss";
import fs from "node:fs";
import slugify from "slugify";
import sql, { Database } from "better-sqlite3";
import { Meal, MealPayload } from "@/types/types";

import { mealKeys } from "./config";

const db: Database = sql("meals.db");

export const getMeals = async (): Promise<Meal[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const meals = db.prepare<Meal[]>("SELECT * FROM meals").all();
  return meals as Meal[];
};

export const getMeal = (slug: string): Meal | undefined => {
  const meal = db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
  return meal as Meal;
};

export const saveMeal = async (meal: MealPayload) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name?.split(".").pop();
  const fileName = `${meal.slug}${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferImage), (err) => {
    throw new Error("Saving image failed!");
  });

  (meal as unknown as Meal).image = `/images/${fileName}`;
  db.prepare(
    `
  INSERT INTO meals
  (slug, ${[...mealKeys].join(", ")})
  VALUES (@slug, ${mealKeys.map((key) => `@${key}`).join(", ")})
  `
  ).run(meal);
};
