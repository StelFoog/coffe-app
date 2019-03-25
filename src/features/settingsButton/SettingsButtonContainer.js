import { connect } from "react-redux";
import { actions } from "./index";
import Settings from "./SettingsButton";

const mapDispatchToProps = dispatch => ({
  showSettings: () => dispatch(actions.showSettings())
});

export default connect(
  null,
  mapDispatchToProps
)(Settings);
