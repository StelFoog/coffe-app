import React from "react";
import SettingsIcon from "./SettingsButtonIcon";
import "./settingsButton.css";

const Settings = ({ showSettings }) => (
  <button className="settings-button" onClick={showSettings}>
    <SettingsIcon />
  </button>
);

export default Settings;
