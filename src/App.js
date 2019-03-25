import React from "react";
import CoffeeButtonContainer from "./features/coffeeButton/CoffeeButtonContainer";
import StatusContainer from "./features/status/StatusContainer";
import TextBoxContainer from "./features/textBox/TextBoxContainer";
import SettingsButtonContainer from "./features/settingsButton/SettingsButtonContainer";
import SettingsScreenContainer from "./features/settingsScreen/SettingsScreenContainer";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <SettingsButtonContainer />
    </header>
    <SettingsScreenContainer />
    <TextBoxContainer />
    <CoffeeButtonContainer />
    <StatusContainer />
  </div>
);

export default App;
