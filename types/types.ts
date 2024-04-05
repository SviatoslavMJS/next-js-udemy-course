export interface Meal {
  id?: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  creator: string;
  instructions: string;
  creator_email: string;
}

export interface MealPayload extends Omit<Meal, "id" | "image"> {
  image: File;
}
