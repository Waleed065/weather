import { combineReducers } from "redux";
import sidebarSettings from "../slices/sidebarSettingsSlice";
import weather from "../slices/weatherSlice";
import country from "../slices/countrySlice";
import snackBar from "../slices/snackBarSlice";
import activeWeatherIndex from "../slices/activeWeatherIndexSlice";
import isCelsius from "../slices/isCelsiusSlice";



export default combineReducers({
  sidebarSettings,
  weather,
  country,
  snackBar,
  activeWeatherIndex,
  isCelsius
});
