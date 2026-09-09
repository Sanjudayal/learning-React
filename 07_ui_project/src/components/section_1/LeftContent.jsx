import React from "react";

import HeroText from "./HeroText";
import ArrowIcon from "./ArrowIcon";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 p-4 flex justify-between flex-col">
      <HeroText />
      <ArrowIcon />
    </div>
  );
};

export default LeftContent;
