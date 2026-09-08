import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <div className="image-container">
            <img src={props.logo} alt={props.company} />
          </div>
          <button>
            Save <Bookmark size={14} />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.datePosted}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h5>{props.tag1}</h5>
            <h5>{props.tag2}</h5>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>${props.payPerHour}/hours</h4>
          <p>{props.location}</p>
        </div>
        <button> Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
