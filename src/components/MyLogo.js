import React from "react";
import food from "../assets/food.png";

const MyLogo = () => {
  return (
    <div className="container myLogo">
      <img src={food} alt="food" />
      <p>Foooodie</p>
    </div>
  );
};

export default MyLogo;
