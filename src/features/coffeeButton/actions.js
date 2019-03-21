import types from "./types";

const { INCREASE_COUNTER, RESET_COUNTER } = types;

const increaseCounter = () => ({
  type: INCREASE_COUNTER
});

const resetCounter = () => ({
  type: RESET_COUNTER
});

export default {
  increaseCounter,
  resetCounter
};
