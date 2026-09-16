import React from "react";
import Card from "./components/Card";
const CardPage = () => {
  return (
    <div className="parent">
      <Card
        userName="Raya"
        age={22}
        imgSrc="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHwzZCUyMHJlbmRlcnxlbnwwfHwwfHx8MA%3D%3D"
      />
      <Card
        userName="Rumi"
        age={20}
        imgSrc="https://images.unsplash.com/photo-1651601787600-40ad979813ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHwzZCUyMHJlbmRlcnxlbnwwfHwwfHx8MA%3D%3D"
      />
    </div>
  );
};

export default CardPage;
