import React, { Component } from "react";
import CoffeeButton from "./features/coffeeButton/coffeeButton";
import Status from "./features/status/status";
import TextBox from "./features/textBox/textBox";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Settings will go here</header>
        <TextBox />
        <CoffeeButton />
        <Status />
      </div>
    );
  }
}

export default App;
