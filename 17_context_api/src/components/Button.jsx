import React, { useContext } from "react";
import { themeDataContext } from "./context/ThemeContext";

const Button = () => {
  const [theme, setTheme] = useContext(themeDataContext);

  return (
    <div>
      <button
        onClick={() => {
          setTheme("dark");
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Button;
