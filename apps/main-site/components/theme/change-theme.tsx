"use client";
import { Button } from "@alessiomarchi/ui/components";
import React, { type FC } from "react";

const ChangeTheme: FC = () => {
  const setThemeCookie = (oldTheme: string, newTheme: string) => {
    const date = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = `theme=${newTheme}; expires=${date.toUTCString()}; path=/; samesite=Strict; secure`;
    
    document.documentElement.classList.remove(`[color-scheme:${oldTheme}]`);
    document.documentElement.classList.add(`[color-scheme:${newTheme}]`);
  };

  const getThemeCookie = () => {
    const cookies = document.cookie
      .split(";")
      .reduce((prev: Record<string, string>, current) => {
        const [name, value] = current.trim().split("=");
        return { ...prev, [name]: value };
      }, {});

    return cookies.theme;
  };

  const handleThemeChange = () => {
    const oldTheme = getThemeCookie();

    let theme;
    if (oldTheme === "dark") {
      theme = "light";
    } else if (oldTheme === "light") {
      theme = "dark";
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "light";
    } else {
      theme = "dark";
    }

    setThemeCookie(oldTheme, theme);
  };

  React.useEffect(() => {
    const theme = getThemeCookie();
    if (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeCookie("never", "dark");
    } else if (!theme) {
      setThemeCookie("never", "light");
    }
  }, []);

  return (
    <Button ariaLabel="Change Theme" onClick={handleThemeChange}>
      Change Theme
    </Button>
  );
};

export default ChangeTheme;
