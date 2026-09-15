import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
const Product = () => {
  return (
    <div>
      <div>
        <div className="catagory">
          <Link to={"/product/men"}>Men</Link>
          <Link to={"/product/women"}>Women</Link>
        </div>
       
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Product;
