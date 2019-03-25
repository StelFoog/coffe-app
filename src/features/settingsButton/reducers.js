import types from "./types";

const { SHOW_SETTINGS } = types;

const initialState = {
  showSettings: false
};

const settingsReducer = (state = initialState, action) => {
  const { type } = action;
  let newState = state;
  switch (type) {
    case SHOW_SETTINGS:
      newState.showSettings = !newState.showSettings;
      return { ...newState };
    default:
      return { ...newState };
  }
};

export default { settingsReducer };
