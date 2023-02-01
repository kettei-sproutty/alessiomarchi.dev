import React, { type FC } from "react";
import { Button } from "@alessiomarchi/ui/components";

const DesignPage: FC = () => {
  return (
    <div className="space-y-2">
      <h1 className="font-bold">Design Page</h1>
      <div className="space-x-3">
        <Button ariaLabel="Button primary">Button Primary</Button>
        <Button ariaLabel="Button secondary" theme={"secondary"}>Button Secondary</Button>
        <Button ariaLabel="Button error" theme={"error"}>Button Error</Button>
        <Button ariaLabel="button info" theme={"info"}>Button Info</Button>
      </div>
    </div>
  );
};

export default DesignPage;
