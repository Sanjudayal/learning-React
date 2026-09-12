import React, { useState } from "react";
import axios, { Axios } from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const userData = await response.json();
    setData(response.data);
  };

  return (
    <div>
      <button onClick={getData}> Get Data</button>
      {data.map((elem, idx) => {
        return <h1 key={idx}>user name is {elem.name}</h1>;
      })}
    </div>
  );
};

export default App;
