import React, { Fragment, type FC } from "react";
import { DefaultTags } from "@alessiomarchi/ui/components";

const Head: FC = () => {
  return (
    <Fragment>
      <title>Projects | Alessio Marchi</title>
      <meta property="og:title" content="Projects | Alessio Marchi " />
      <DefaultTags />
    </Fragment>
  );
};

export default Head;
