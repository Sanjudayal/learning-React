import React, { useState } from "react";

const UseStateOnArrayObject = () => {
  const [data, setData] = useState({ user: "Clay Jensen", age: 20 });
  return (
    <div className="practiceContainer">
      <h1>
        {data.user}, {data.age}
      </h1>
      <button
        onClick={() => {
          const newData = { ...data };
          newData.user = "Bryce Walker";
          newData.age = 22;
          setData(newData);
        }}
      >
        click
      </button>
      <button
        onClick={() => {
          setData((prev) => ({ ...prev, user: "Clay Jensen", age: "20" }));
        }}
      >
        undo
      </button>
    </div>
  );
};

export default UseStateOnArrayObject;
