"use client";
import { PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";

export const HeaderLink = (props: PropsWithChildren<LinkProps>) => {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={
        pathname.startsWith(String(props.href))
          ? `${styles.link} ${styles.active}`
          : styles.link
      }
    />
  );
};
