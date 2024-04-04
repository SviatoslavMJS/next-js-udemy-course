import Image from "next/image";
import { PropsWithChildren } from "react";

import { getMeal } from "@/lib/meals";

import styles from "./styles.module.css";
import { notFound } from "next/navigation";

const MealDetails = ({ params }: PropsWithChildren<Record<string, any>>) => {
  const meal = getMeal(params.mealSlug);
  const { image, title, creator_email, summary, creator, instructions } =
    meal ?? {};

  if (!meal) {
    return notFound();
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          {image && <Image fill src={image} alt={title ?? "image"} />}
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by<a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: instructions?.replace(/\n/g, "<br />") ?? "",
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetails;
