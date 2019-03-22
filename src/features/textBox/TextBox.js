import React from "react";

const TextBox = ({ colour, text }) => (
  <div className="textBox" style={{ backgroundColor: colour }}>
    <h2>{text}</h2>
  </div>
);

export default TextBox;
