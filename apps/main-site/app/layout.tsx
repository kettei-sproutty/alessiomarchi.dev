import React, { type FC, type PropsWithChildren } from "react";
import clsx from "clsx";
import Navbar from "../components/navbar/navbar";
import { cookies } from 'next/headers'
import { AnalyticsWrapper } from '@alessiomarchi/ui/components'
import globalMetadata from "./metadata";

import "@alessiomarchi/ui/styles/globals.css";

export const metadata = globalMetadata;

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const themeCookie = cookies().get('theme')
  
  const classes = clsx({
    '[color-scheme:dark]': themeCookie?.value === 'dark',
    '[color-scheme:light]': themeCookie?.value === 'light'
  })

  return (
    <html lang="en" className={classes}>
      <head />
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Navbar />
        <main className="px-2 overflow-y-scroll max-h-screen">{children}</main>
        <AnalyticsWrapper />
      </body>
    </html>
  );
};

export default RootLayout;
