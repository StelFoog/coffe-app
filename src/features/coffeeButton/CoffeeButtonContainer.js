import { connect } from "react-redux";
import { actions } from "./index";
import CoffeeButton from "./CoffeeButton";

const mapDispatchToProps = dispatch => ({
  increaseCounter: () => dispatch(actions.increaseCounter()),
  timeout: () => dispatch(actions.timeout())
});

export default connect(
  null,
  mapDispatchToProps
)(CoffeeButton);
