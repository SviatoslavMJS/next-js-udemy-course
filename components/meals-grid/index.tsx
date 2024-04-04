import classes from "./styles.module.css";

import { MealItem } from "../meal-item";

export const MealsGrid = ({ meals }: Record<string, any>) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: Record<string, any>) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};
