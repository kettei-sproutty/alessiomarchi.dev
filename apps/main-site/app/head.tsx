import React, { Fragment, type FC } from "react";

const Head: FC = () => {
  return (
    <Fragment>
      <title>Alessio Marchi | Home</title>
      <meta name="description" content="Alessio Marchi personal website" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" href="/favicon.ico" />
    </Fragment>
  );
};

export default Head;
