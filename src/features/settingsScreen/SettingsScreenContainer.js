import { connect } from "react-redux";
import SettingsScreen from "./SettingsScreen";
import { selectors } from "../settingsButton";

const makeMapStateToProps = () => {
  const getSettingsScreenVisibleState = selectors.getSettingsScreenVisibleState();
  return state => ({
    settingsScreen: getSettingsScreenVisibleState(state)
  });
};

export default connect(
  makeMapStateToProps,
  null
)(SettingsScreen);
