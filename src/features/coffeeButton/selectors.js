import { createSelector } from "reselect";

const getCoffeeCounter = ({ coffee }) => coffee.counter;

const getCoffeeCounterState = () =>
  createSelector([getCoffeeCounter], coffeCounter => coffeCounter);

export default { getCoffeeCounterState };
