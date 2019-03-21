import React from "react";
import CoffeeButtonContainer from "./features/coffeeButton/CoffeeButtonContainer";
import Status from "./features/status/Status";
import TextBox from "./features/textBox/TextBox";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">Settings will go here</header>
    <TextBox />
    <CoffeeButtonContainer />
    <Status />
  </div>
);

export default App;
