import { connect } from "react-redux";
import SettingsScreen from "./SettingsScreen";
import { selectors as settingsSelectors } from "../settingsButton";
import {
  selectors as coffeeSelectors,
  actions as coffeeActions
} from "../coffeeButton";

const makeMapStateToProps = () => {
  const getSettingsScreenVisibleState = settingsSelectors.getSettingsScreenVisibleState();
  const getCoffeeCounterState = coffeeSelectors.getCoffeeCounterState();
  return state => ({
    settingsScreen: getSettingsScreenVisibleState(state),
    coffeeCounter: getCoffeeCounterState(state)
  });
};

const mapDispatchToProps = dispatch => ({
  resetCounter: () => dispatch(coffeeActions.resetCounter())
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(SettingsScreen);
