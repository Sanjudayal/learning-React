import React from "react";
import Navbar from "./Navbar";
import ContentContainer from "./ContentContainer";

export const Section1 = (props) => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <ContentContainer users={props.users} />
    </div>
  );
};

export default Section1;
