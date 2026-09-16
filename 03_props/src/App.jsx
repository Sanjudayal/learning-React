import React from "react";
import Card from "./components/Card";
import CardPage from "./CardPage";
import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <div className="navbarContainer">
        <h1>theme is {theme}</h1>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
      <CardPage />
    </div>
  );
};
export default App;
