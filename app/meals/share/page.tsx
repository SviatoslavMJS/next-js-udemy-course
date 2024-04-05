"use client";
import { shareMeal } from "@/lib/actions";
import { ImagePicker, SubmitButton } from "@/components";

import styles from "./styles.module.css";
import { useFormState } from "react-dom";

const SharePage = () => {
  const [state, formAction] = useFormState<{ error: string }, FormData>(
    shareMeal,
    { error: "" }
  );

  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>

      <main className={styles.main}>
        <form className={styles.form} action={formAction}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="creator" required />
            </p>

            <p>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="creator_email"
                required={false}
              />
            </p>
          </div>

          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>

          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>

          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              required
              rows={10}
              id="instructions"
              name="instructions"
            ></textarea>
          </p>

          <ImagePicker name="image" label="Your image" />
          {state?.error && <p>{state?.error}</p>}
          <p className={styles.actions}>
            <SubmitButton />
          </p>
        </form>
      </main>
    </>
  );
};

export default SharePage;
