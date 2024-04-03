import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

import classes from "./main-header.module.css";

import { HeaderBackground } from "../header-background";
import { HeaderLink } from "..";

const links = [
  { href: "/meals", text: "Show meals" },
  { href: "/community", text: "Community" },
];

const MainHeader = () => {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="logo" priority />
          NextLevel food
        </Link>
        <nav className={classes.nav}>
          <ul>
            {links.map(({ href, text }) => (
              <li key={text}>
                <HeaderLink href={href}>{text}</HeaderLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
