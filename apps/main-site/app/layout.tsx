import React, { type FC, type PropsWithChildren } from "react";
import Link from "next/link";
import styles from './layout.module.css';

import "@alessiomarchi/ui/styles/globals.css";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body className="overflow-y-scroll bg-gray-900">
        <nav className="flex flex-row space-x-2 p-2">
          <Link className={styles.link} href="/">Home</Link>
          <Link className={styles.link} href="/about">About me</Link>
          <Link className={styles.link} href="/projects">Projects</Link>
          <Link className={styles.link} href="/design">Design</Link>
        </nav>
        <main className={"w-full max-w-3xl mx-auto py-16"}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
