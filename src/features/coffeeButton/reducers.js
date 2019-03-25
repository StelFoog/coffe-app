import types from "./types";

const { INCREASE_COUNTER, RESET_COUNTER, TIMEOUT } = types;

const initialState = {
  counter: 0,
  date: new Date(Date.now)
};

function sameDay(d1, d2) {
  d1 = new Date(d1);
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

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
    case TIMEOUT:
      const newDate = new Date();
      if (sameDay(newState.date, newDate)) return { ...newState };
      else {
        newState.counter = 0;
        newState.date = newDate;
        return { ...newState };
      }
    default:
      return { ...newState };
  }
};

export default {
  coffeeReducer
};
