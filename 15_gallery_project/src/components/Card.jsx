import React from "react";

const Card = (props) => {
  return (
    <div>
      {" "}
      <a href={props.el.url} target="blank">
        <div key={props.id} className="h-50 w-50 bg-white rounded-xl">
          <img
            className="h-full w-full object-cover rounded-xl"
            key={props.id}
            src={props.el.download_url}
            alt="image"
          />
        </div>
        <h3 className="font-semibold text-lg text-center pt-2">
          {props.el.author}
        </h3>
      </a>
    </div>
  );
};

export default Card;
