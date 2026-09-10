import React, { useState } from "react";

const PracticeUseState = () => {
  const [Num, setNum] = useState(10);

  return (
    <div>
      <div>
        <h1>the value of num is {Num}</h1>
        <button onClick={() => setNum(200)}>click</button>
      </div>
    </div>
  );
};

export default PracticeUseState;
