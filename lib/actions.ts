"use server";
import { MealPayload } from "@/types/types";
import { redirect } from "next/navigation";

import { saveMeal } from "./meals";
import { mealKeys } from "./config";
import { isInvalidText } from "./helpers";
import { revalidatePath } from "next/cache";

export const shareMeal = async (
  prevState: { error: string },
  formData: FormData
) => {
  const meal: Record<string, any> = {};
  mealKeys.forEach((key) => (meal[key] = formData?.get(key)));

  if (
    !meal.image?.size ||
    !meal.creator_email?.includes("@") ||
    Object.entries(meal).some(
      ([key, value]) => key !== "image" && isInvalidText(value)
    )
  ) {
    return {
      error: "Invalid image.",
    };
  }

  await saveMeal(meal as MealPayload);
  revalidatePath("/meals");
  redirect("/meals");
};
