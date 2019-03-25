import types from "./types";

const { SHOW_SETTINGS } = types;

const showSettings = () => ({
  type: SHOW_SETTINGS
});

export default {
  showSettings
};
