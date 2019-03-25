import { combineReducers } from "redux";
import { reducers as coffeeButtonReducers } from "./features/coffeeButton";
import { reducers as settingsButtonReducers } from "./features/settingsButton";

const appReducer = combineReducers({
  coffee: coffeeButtonReducers.coffeeReducer,
  settings: settingsButtonReducers.settingsReducer
});

const rootReducer = (state, action) => {
  if (action.type === "persist/REHYDRATE") return state;

  return appReducer(state, action);
};

export default rootReducer;
