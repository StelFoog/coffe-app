import React from "react";
import CoffeeButtonContainer from "./features/coffeeButton/CoffeeButtonContainer";
import StatusContainer from "./features/status/StatusContainer";
import TextBoxContainer from "./features/textBox/TextBoxContainer";
import SettingsButtonContainer from "./features/settingsButton/SettingsButtonContainer";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <SettingsButtonContainer />
    </header>
    <TextBoxContainer />
    <CoffeeButtonContainer />
    <StatusContainer />
  </div>
);

export default App;
