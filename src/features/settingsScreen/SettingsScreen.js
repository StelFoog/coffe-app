import React from "react";
import "./settingsScreen.css";

class SettingsScreen extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div
        className={
          "settingsContainer " + (this.props.settingsScreen ? "show" : "hidden")
        }
      >
        <div className="settingsInner">
          <h3>Settings will go here</h3>

          <button className="resetButton" onClick={this.props.resetCounter}>
            Reset counter
          </button>
        </div>
      </div>
    );
  }
}
export default SettingsScreen;
