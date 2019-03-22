import React from "react";
import CoffeeButtonContainer from "./features/coffeeButton/CoffeeButtonContainer";
import StatusContainer from "./features/status/StatusContainer";
import TextBoxContainer from "./features/textBox/TextBoxContainer";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">Settings will go here</header>
    <TextBoxContainer />
    <CoffeeButtonContainer />
    <StatusContainer />
  </div>
);

export default App;
