import React, { type FC } from "react";
import { Button } from "@alessiomarchi/ui/components";

const Page: FC = () => {
  return (
    <div>
      <h1 className="font-bold">Buttons</h1>
      <div className="space-x-3">
        <Button>Button Primary</Button>
        <Button theme={"secondary"}>Button Secondary</Button>
        <Button theme={"error"}>Button Error</Button>
        <Button theme={"info"}>Button Info</Button>
      </div>
    </div>
  );
};

export default Page;
