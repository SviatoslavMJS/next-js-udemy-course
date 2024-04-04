"use client";

import { ChangeEvent, useRef, useState } from "react";

import styles from "./styles.module.css";
import Image from "next/image";

export const ImagePicker = ({
  name,
  label,
}: {
  name: string;
  label?: string;
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setSelectedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setSelectedImage(String(fileReader.result));
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      {label && <label htmlFor={name}>{label}</label>}

      <div className={styles.controls}>
        <div className={styles.preview}>
          {!selectedImage ? (
            <p>No image picked yet.</p>
          ) : (
            <Image fill src={selectedImage} alt="Selected image" />
          )}
        </div>

        <input
          required
          id="image"
          type="file"
          name={name}
          ref={imageInput}
          className={styles.input}
          onChange={handleInputChange}
          accept="image/png, image/jpeg"
        />

        <button
          type="button"
          className={styles.button}
          onClick={() => imageInput?.current?.click()}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
};
