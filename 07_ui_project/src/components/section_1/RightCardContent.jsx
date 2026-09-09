import React from "react";
import { RiArrowRightLine } from "@remixicon/react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-7 flex justify-between flex-col">
      <h2 className="bg-white font-semibold rounded-full w-10 h-10 flex justify-center items-center text-xl">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-shadow-2xs text-lg leading-relaxed text-white mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
          voluptatum totam deserunt dolore porro ut.
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.btnColor }}
            className=" text-white px-7 py-2 rounded-full"
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.btnColor }}
            className="bg-blue-700 text-white px-2 py-2 rounded-full"
          >
            <RiArrowRightLine size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
