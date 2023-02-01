"use client";
import React from "react";
import clsx from "clsx";
import type {
  FC,
  MouseEventHandler,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";

import styles from "./button.module.css";

export type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  theme?: "primary" | "secondary" | "error" | "info";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  ariaLabel: string;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  type = "button",
  theme = "primary",
  size = "small",
  fullWidth = false,
  ariaLabel,
  onClick,
  children,
}) => {
  const classes = clsx(styles["root"], styles[theme], styles[size], {
    [styles.full]: fullWidth,
  });

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
