import { PropsWithChildren } from "react";

const MealDetails = ({ params }: PropsWithChildren) => {
  return <h1>{params.slug}</h1>;
};

export default MealDetails;
