import React from "react";
import CoffeeButtonContainer from "./features/coffeeButton/CoffeeButtonContainer";
import StatusContainer from "./features/status/StatusContainer";
import TextBoxContainer from "./features/textBox/TextBoxContainer";
import SettingsContainer from "./features/settings/SettingsContainer";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <SettingsContainer />
    </header>
    <TextBoxContainer />
    <CoffeeButtonContainer />
    <StatusContainer />
  </div>
);

export default App;
