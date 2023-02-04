"use client";
import React from "react";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from 'next/navigation'
import type { FC, PropsWithChildren } from "react";

import styles from "./navbar-link.module.css";

export type LinkProps = {
  href: string;
};

const NavbarLink: FC<PropsWithChildren<LinkProps>> = ({ href, children }) => {
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

export default NavbarLink;
