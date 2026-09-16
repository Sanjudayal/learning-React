import React, { useContext } from "react";
import NavLinks from "./NavLinks";
import { themeDataContext } from "./context/ThemeContext";

const Navbar = () => {
  const [theme] = useContext(themeDataContext);
  return (
    <div className={theme}>
      <h1>Aadly</h1>
      <NavLinks />
    </div>
  );
};

export default Navbar;
