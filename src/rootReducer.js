import { combineReducers } from "redux";
import { reducers as coffeeButtonReducers } from "./features/coffeeButton";

const rootReducer = combineReducers({
  coffee: coffeeButtonReducers.coffeeReducer
});

export default rootReducer;
