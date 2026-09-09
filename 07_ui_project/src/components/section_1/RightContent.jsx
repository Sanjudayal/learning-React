import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  // console.log(props.users);
  return (
    <div
      id="right"
      className="overflow-x-auto rounded-4xl h-full w-2/3  py-6 flex flex-nowrap gap-7"
    >
      {props.users.map(function (el, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            img={el.img}
            tag={el.tag}
            btnColor={el.btnColor}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
