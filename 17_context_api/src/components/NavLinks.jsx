import React, { useContext } from "react";
import { themeDataContext } from "./context/ThemeContext";

const NavLinks = () => {
  const [theme, setTheme] = useContext(themeDataContext);
  return (
    <div className="links">
      <h4>home</h4>
      <h4>about</h4>
      <h4> contact</h4>
      <h4> product</h4>
      <h4> {theme}</h4>
    </div>
  );
};

export default NavLinks;
