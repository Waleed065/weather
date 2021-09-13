import { combineReducers } from "redux";
import weather from "../slices/weatherSlice";
import country from "../slices/countrySlice";
import snackBar from "../slices/snackBarSlice";
import activeWeatherIndex from "../slices/activeWeatherIndexSlice";
import isCelsius from "../slices/isCelsiusSlice";
import loading from "../slices/loadingSlice";



export default combineReducers({
  weather,
  country,
  snackBar,
  activeWeatherIndex,
  isCelsius,
  loading
});
