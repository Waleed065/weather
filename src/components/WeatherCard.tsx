import React, { memo } from "react";
import "./css/WeatherCard.css";
import { dailyWeatherType } from "../types";
import day from "../utils/day";
import getTemperature from "../utils/getTemperature";
import { useDispatch } from "react-redux";
import { setActiveWeatherIndex } from "../store/slices/activeWeatherIndexSlice";

interface schema {
  item: dailyWeatherType;
  isCelsius: boolean;
  isActive: boolean;
  index: number;
}
const WeatherCard = ({
  item: {
    dt,
    temp: { min, max },
    weather,
  },
  isCelsius,
  isActive,
  index,
}: schema) => {
  const dispatch = useDispatch();
  const { icon } = weather[0];

  const onClick = () => {
    dispatch(setActiveWeatherIndex(index));
  };
  
  return (
    <div
      className={`weather-card global-button ${
        isActive ? "weather-card-active" : undefined
      }`}
      onClick={onClick}
    >
      <div>
        <strong>{day(dt)}</strong>
      </div>
      <img
        alt="icon"
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        width={100}
        height={100}
      />

      <div>
        <b>Min - </b>
        <p>{getTemperature({ isCelsius, temp: min })}</p>
      </div>
      <div>
        <b>Max - </b>
        <p>{getTemperature({ isCelsius, temp: max })}</p>
      </div>
    </div>
  );
};

export default memo(WeatherCard);
