import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

export const MealItem = ({
  title,
  slug,
  image,
  summary,
  creator,
}: Record<string, any>) => {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={image} alt={title} sizes="100vh" fill />
        </div>

        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>

      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>

        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};
