import { sidebarSettingsStateType, stringActionType } from "../../types";

/* --------------constants-------------- */
const setSearchByConst = "setSearchBy";
const toggleWindSpeedConst = "toggleWindSpeed";
const toggleHumidityConst = "toggleHumidity";
const togglePressureConst = "togglePressure";
const toggleSunriseConst = "toggleSunrise";
const toggleSunsetConst = "toggleSunset";

/* --------------reducers-------------- */
const defaultState = {
  searchBy: "Name",
  windspeed: true,
  humidity: true,
  pressure: true,
  sunrise: true,
  sunset: true,
};
export default function sidebarSettings(
  state: sidebarSettingsStateType = defaultState,
  action: any
) {
  switch (action.type) {
    case setSearchByConst:
      return {
        ...state,
        searchBy: action.payload as string,
      };
    case toggleWindSpeedConst:
      return {
        ...state,
        windspeed: !state.windspeed,
      };
    case toggleHumidityConst:
      return {
        ...state,
        humidity: !state.humidity,
      };
    case togglePressureConst:
      return {
        ...state,
        pressure: !state.pressure,
      };
    case toggleSunriseConst:
      return {
        ...state,
        sunrise: !state.sunrise,
      };
    case toggleSunsetConst:
      return {
        ...state,
        sunset: !state.sunset,
      };
    default:
      return state;
  }
}

/* --------------actions-------------- */
export function setSearchBy(payload: string): stringActionType {
  return {
    type: setSearchByConst,
    payload,
  };
}
export function toggleWindSpeed() {
  return {
    type: toggleWindSpeedConst,
  };
}
export function toggleHumidity() {
  return {
    type: toggleHumidityConst,
  };
}
export function togglePressure() {
  return {
    type: togglePressureConst,
  };
}
export function toggleSunrise() {
  return {
    type: toggleSunriseConst,
  };
}
export function toggleSunset() {
  return {
    type: toggleSunsetConst,
  };
}
