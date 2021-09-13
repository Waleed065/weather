import { store } from "../store";

export type booleanActionType = {
  type: string;
  payload: boolean;
};

// ---------------------->Index<--------------------
export type indexActionType = {
  type: string;
  payload: number;
};
// ---------------------->string<--------------------
export type stringActionType = {
  type: string;
  payload: string;
};

// ---------------------->empty<--------------------
export type emptyActionType = {
  type: string;
};
// ---------------------->snackbar<--------------------
export type snackbarStateType = {
  message: string;
  show: boolean;
};

// ---------------------->sidebarSettings<--------------------
export type sidebarSettingsStateType = {
  searchBy: string;
  windspeed: boolean;
  humidity: boolean;
  pressure: boolean;
  sunrise: boolean;
  sunset: boolean;
};
// ---------------------->weather<--------------------
type currentWeatherType = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
};
export interface dailyWeatherType
  extends Omit<currentWeatherType, "temp" | "visibility"> {
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;

  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
}
export type weatherStateType = {
  current: currentWeatherType;
  daily: dailyWeatherType[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  country: string;
  city: string;
  countryCode: string;
};

export type weatherActionType = {
  type: string;
  payload: weatherStateType;
};

// ---------------------->countries<-------------------->
export type countryType = {
  name: string;
  alpha2Code: string;
  emoji: string;
};
export type countriesSchema = Array<countryType>;
export type countryActionType = {
  type: string;
  payload: countryType;
};

// ---------------------->thunk<--------------------
export type thunkActionType = {
  dispatch: DispatchType;
  getState: () => StateType;
};

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
