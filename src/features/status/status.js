import React from "react";

const Status = ({ coffeeCounter }) => (
  <div className="status">
    <h1>{coffeeCounter}</h1>
    <h3>Cups today</h3>
  </div>
);

export default Status;
