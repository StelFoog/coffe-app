import React from "react";
import CoffeeIcon from "./CoffeeIcon";
import "./coffeeButton.css";

class CoffeeButton extends React.Component {
  getDate() {
    this.props.timeout();

    setTimeout(() => {
      this.getDate();
    }, 10000);
  }

  componentDidMount() {
    this.getDate();
  }

  render() {
    return (
      <div>
        <button className="coffeeButton" onClick={this.props.increaseCounter}>
          <CoffeeIcon />
        </button>
      </div>
    );
  }
}

export default CoffeeButton;
