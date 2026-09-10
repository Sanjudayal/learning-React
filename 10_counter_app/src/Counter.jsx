import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counterBody">
      <div className="container">
        <h1> Counter App</h1>
        <h1 className="counter">{count}</h1>
        <div className="btnContainer">
          <button
            className="increament"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increament
          </button>
          <button
            className="decreamentBtn"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decreament
          </button>
          <button
            className="reset"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
