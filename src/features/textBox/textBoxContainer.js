import React from "react";
import { connect } from "react-redux";
import TextBox from "./TextBox";
import { selectors } from "../coffeeButton";
import data from "../../dbi/textboxData";

const TextBoxContainer = ({ coffeeCounter }) => {
  let dat;

  if (coffeeCounter <= 0) dat = data.noCoffe;
  else if (coffeeCounter <= 2) dat = data.someCoffe;
  else if (coffeeCounter < 4) dat = data.muchCoffe;
  else if (coffeeCounter >= 4) dat = data.enoughCoffe;

  const { colour, texts } = dat;
  const text = texts[Math.floor(Math.random() * texts.length)];

  return <TextBox colour={colour} text={text} />;
};

const makeMapStateToProps = () => {
  const getCoffeeCounterState = selectors.getCoffeeCounterState();
  return state => ({
    coffeeCounter: getCoffeeCounterState(state)
  });
};

export default connect(
  makeMapStateToProps,
  null
)(TextBoxContainer);
