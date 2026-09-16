import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.setTheme("dark");
        }}
        className="themeChanger"
      >
        change theme
      </button>
    </div>
  );
};

export default Navbar;
