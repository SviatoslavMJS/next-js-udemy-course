import { Meal } from "@/types/types";
import sql, { Database } from "better-sqlite3";

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
