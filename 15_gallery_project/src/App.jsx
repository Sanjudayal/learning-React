import React from "react";
import axios, { Axios } from "axios";

const App = () => {
  const data = axios.get("https://api.github.com/users");
  return <div className="bg-black text-white h-screen">App</div>;
};

export default App;
