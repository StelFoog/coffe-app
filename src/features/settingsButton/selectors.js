import { createSelector } from "reselect";

const getSettingsScreenVisible = ({ settings }) => settings.showSettings;

const getSettingsScreenVisibleState = () =>
  createSelector(
    [getSettingsScreenVisible],
    showSettings => showSettings
  );

export default { getSettingsScreenVisibleState };
