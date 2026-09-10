import React from "react";

const App = () => {
  const btnClicked = () => {
    console.log("btn clicked");
  };

  const input = (value) => {
    console.log(value);
  };

  return (
    <div
      onWheel={(event) => {
        if (event.deltaY > 0) {
          console.log("sidha scrolling");
        } else {
          console.log("ulta scrolling");
        }
      }}
    >
      <div className="page1">
        <button onClick={btnClicked}>Click Here</button>
        <br />
        <input
          onChange={(event) => {
            input(event.target.value);
          }}
          type="text"
        />
        <div className="box-container">
          <div
            className="box"
            onMouseEnter={() => {
              console.log("mouse enter");
            }}
          ></div>
          <div
            className="box2"
            onMouseMove={(event) => {
              // console.log(event.clientX);
              //   console.log(event.clientY);
            }}
          ></div>
        </div>
      </div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default App;
