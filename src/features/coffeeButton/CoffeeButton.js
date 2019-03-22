import React from "react";
import CoffeeIcon from "./CoffeeIcon";
import "./coffeeButton.css";
const CoffeeButton = ({ increaseCounter }) => (
  <div>
    <button className="coffeeButton" onClick={increaseCounter}>
      <CoffeeIcon />
    </button>
  </div>
);

export default CoffeeButton;
