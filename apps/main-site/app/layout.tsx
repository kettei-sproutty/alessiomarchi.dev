import React, { type FC, type PropsWithChildren } from "react";
import { AnalyticsWrapper } from '@alessiomarchi/ui/components'
import "@alessiomarchi/ui/styles/globals.css";
import Navbar from "../components/navbar/navbar";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Navbar />
        <main className="px-2">{children}</main>
        <AnalyticsWrapper />
      </body>
    </html>
  );
};

export default RootLayout;
