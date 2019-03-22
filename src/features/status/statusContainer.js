import { connect } from "react-redux";
import Status from "./Status";
import { selectors } from "../coffeeButton";

const makeMapStateToProps = () => {
  const getCoffeeCounterState = selectors.getCoffeeCounterState();
  return state => ({
    coffeeCounter: getCoffeeCounterState(state)
  });
};

export default connect(
  makeMapStateToProps,
  null
)(Status);
