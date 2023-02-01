import React, { type FC } from "react";
import { Link } from "@alessiomarchi/ui/components";
import ChangeTheme from "../theme/change-theme";

import styles from './navbar.module.css';

const Navbar: FC = () => {

  return (
    <nav className={styles.root}>
      <Link href="/">Home</Link>
      <Link href="/about">About me</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/design">Design</Link>
      <ChangeTheme />
    </nav>
  );
};

export default Navbar;
