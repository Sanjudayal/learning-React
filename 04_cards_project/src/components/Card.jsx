import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <div className="image-container">
            <img
              src="https://i.pinimg.com/236x/89/61/31/8961313816abd158bb3beae2edf64f63.jpg"
              alt="amazon"
            />
          </div>
          <button>
            Save <Bookmark size={14} />
          </button>
        </div>
        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h5>Part Time</h5>
            <h5>Senior Level</h5>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <button> Apply Now</button>
      </div>
    </div>
  );
};

export default Card