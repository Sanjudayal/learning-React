import React, { useEffect, useState } from "react";
import { use } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  useEffect(() => {
    console.log("num changing");
  }, [num2]);

  // const changing = () => {
  //   console.log("changing");
  // };
  // changing();
  return (
    <div>
      <h1>num = {num}</h1>
      <h1>num2 = {num2}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        change
      </button>
      <button
        onClick={() => {
          setNum2(num2 + 1);
        }}
      >
        change num 2
      </button>
    </div>
  );
};

export default App;
// https://api.github.com/users?per_page=10
