import types from "./types";

const { INCREASE_COUNTER, RESET_COUNTER } = types;

const initialState = {
  counter: 0
};

const coffeeReducer = (state = initialState, action) => {
  const { type } = action;
  let newState = state;
  switch (type) {
    case INCREASE_COUNTER:
      newState.counter++;
      return { ...newState };
    case RESET_COUNTER:
      newState.counter = 0;
      return { ...newState };
    default:
      return { ...newState };
  }
};

export default {
  coffeeReducer
};
