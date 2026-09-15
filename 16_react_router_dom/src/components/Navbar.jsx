import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h3>Aadly</h3>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
