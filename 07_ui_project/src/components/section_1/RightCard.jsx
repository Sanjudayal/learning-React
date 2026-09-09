import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="shrink-0 w-70 h-full rounded-4xl overflow-hidden relative">
      <img className="h-full w-full object-cover" src={props.img} alt="img" />

      <RightCardContent
        id={props.id}
        tag={props.tag}
        btnColor={props.btnColor}
      />
    </div>
  );
};

export default RightCard;
