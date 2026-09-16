import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigae = useNavigate();

  return (
    <div className="nav2">
      <button
        onClick={() => {
          navigae("/");
        }}
      >
        Return Home
      </button>
      <button
        onClick={() => {
          navigae(-1);
        }}
      >
        Back
      </button>
      <button onClick={()=>{navigae(+1)}}>Next</button>
    </div>
  );
};

export default Navbar2;
