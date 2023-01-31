import React, { type FC, type PropsWithChildren } from "react";
import "@alessiomarchi/ui/styles/globals.css";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body className="overflow-y-scroll bg-gray-1100">
        <main className={'w-full max-w-3xl mx-auto py-16'}>
         {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
