import { batch } from "react-redux";
import { createSelector } from "reselect";
import {
  DispatchType,
  StateType,
  weatherActionType,
  weatherStateType,
  dailyWeatherType,
} from "../../types";
import getCoordsByName from "../../utils/getCoordsByName";
import getCoordsByZipcode from "../../utils/getCoordsByZipcode";
import getWeather from "../../utils/getWeather";
import { setActiveWeatherIndex } from "./activeWeatherIndexSlice";
import { setLoading } from "./loadingSlice";
import { setSnackBar } from "./snackBarSlice";

/* --------------constants-------------- */
const setWeatherConst = "setWeather";

/* --------------reducers-------------- */
const current = {
  clouds: 5,
  dew_point: 293.42,
  dt: Date.now() / 1000,
  feels_like: 298.03,
  humidity: 78,
  pressure: 1006,
  sunrise: 1631407726,
  sunset: 1631452748,
  temp: 297.5,
  uvi: 0,
  visibility: 10000,
  weather: [
    {
      description: "clear sky",
      id: 800,
      icon: "01n",
      main: "Clear",
    },
  ],
  wind_deg: 53,
  wind_gust: 2.05,
  wind_speed: 1.95,
};
const dailyWeather = {
  ...current,
  moon_phase: 0.19,
  moonrise: 1631427780,
  moonset: 1631465460,
  pop: 0.98,
  pressure: 1005,
  rain: 3.43,
  sunrise: 1631407726,
  sunset: 1631452748,
  temp: {
    day: 303.52,
    min: 295.58,
    max: 304.43,
    night: 298.46,
    eve: 301.38,
    morn: 295.58,
  },
  uvi: 8.82,
};
const defaultState: weatherStateType = {
  current,
  daily: [
    dailyWeather,
    dailyWeather,
    dailyWeather,
    dailyWeather,
    dailyWeather,
    dailyWeather,
    dailyWeather,
  ],
  lat: 33.6844,
  lon: 73.0479,
  timezone: "Asia/Karachi",
  timezone_offset: 18000,
  country: "Pakistan",
  city: "Islamabad",
  countryCode: "PK",
};
export default function weather(
  state: weatherStateType = defaultState,
  action: weatherActionType
) {
  switch (action.type) {
    case setWeatherConst:
      return action.payload;
    default:
      return state;
  }
}

/* --------------actions-------------- */
export function setWeather(payload: weatherStateType): weatherActionType {
  return {
    type: setWeatherConst,
    payload,
  };
}

/* --------------middle wares-------------- */

export function fetchWeather(query: string) {
  return async (dispatch: DispatchType, getState: () => StateType) => {
    const { alpha2Code, name } = getState().country;

    dispatch(setLoading(true));

    try {
      let getCoords;
      if (/^\d+$/.test(query)) getCoords = getCoordsByZipcode;
      else getCoords = getCoordsByName;

      const { lat, lon, city } = await getCoords({
        query,
        countryCode: alpha2Code,
      });

      try {
        const response = await getWeather({ lat, lon });
        batch(() => {
          dispatch(setLoading(false));

          dispatch(setActiveWeatherIndex(0));
          dispatch(
            setWeather({
              ...response,
              country: name,
              city,
              countryCode: alpha2Code,
            })
          );
          dispatch(setSnackBar(`You're now viewing forecast for ${city}`));
        });
      } catch (err) {
        batch(() => {
          dispatch(setSnackBar("Unable to fetch forecast at the moment! 😕"));
          dispatch(setLoading(false));
        });

        return;
      }
    } catch (err) {
      batch(() => {
        dispatch(
          setSnackBar(`Unable to search for ${query}. Try something else!`)
        );
        dispatch(setLoading(false));
      });
      return;
    }
  };
}

/* --------------custom selectors-------------- */
const activeWeatherIndexReducer = (state: StateType) =>
  state.activeWeatherIndex;
const weatherReducer = (state: StateType) => state.weather;

interface activeWeatherType extends dailyWeatherType {
  country: string;
  city: string;
  countryCode: string;
  timezone: string;
}
function activeWeather(
  index: number,
  state: weatherStateType
): activeWeatherType {
  const { country, city, countryCode, timezone } = state;
  return {
    ...state.daily[index],
    country,
    city,
    countryCode,
    timezone,
  };
}
export const getActiveWeather = createSelector(
  [activeWeatherIndexReducer, weatherReducer],
  activeWeather
);
