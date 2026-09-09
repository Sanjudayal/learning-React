import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-16 py-8">
      <h4 className="bg-black text-white px-6 py-2 rounded-full">
        Target Audience
      </h4>
      <button className="bg-gray-300 px-6 py-2 tracking-widest uppercase rounded-full text-sm">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
