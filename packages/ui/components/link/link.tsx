"use client";
import React from "react";
import clsx from "clsx";
import NextLink from "next/link";
import type { FC, PropsWithChildren } from "react";
import { usePathname } from 'next/navigation'

import styles from "./link.module.css";

export type LinkProps = {
  href: string;
};

const Link: FC<PropsWithChildren<LinkProps>> = ({ href, children }) => {
    const pathname = usePathname();
    
    const classes = clsx(styles["root"], {
        [styles.active]: pathname === href,
    });

  return (
    <NextLink href={href} className={classes}>
      {children}
    </NextLink>
  );
};

export default Link;
