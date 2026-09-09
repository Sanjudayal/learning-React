import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const ContentContainer = (props) => {
  return (
    <div className="h-[86vh] flex justify-between items-center px-16 pt-6 py-12 gap-5 ">
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  );
};

export default ContentContainer;
