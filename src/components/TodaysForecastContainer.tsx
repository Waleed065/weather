import React from "react";
import "./css/TodaysForecastContainer.css";

import { useSelector } from "react-redux";
import { getActiveWeather } from "../store/slices/weatherSlice";
import { StateType } from "../types";
import getTemperature from "../utils/getTemperature";
import formatTitle from "../utils/formatTitle";
import day from "../utils/day";

export default function TodaysForecastContainer() {
  const {
    temp: { min, max },
    weather,
    dt,
    city,
    countryCode,
  } = useSelector(getActiveWeather);
  const temp = useSelector((state: StateType) => state.weather.current.temp);

  const { description, icon } = weather[0];

  const isCelsius = useSelector((state: StateType) => state.isCelsius);

  const weekday = day(dt);
  const isToday = weekday === "Today";
  return (
    <div id="todays-forecast-container">
      <h2>
        {weekday}'s Forecast for {city}/{countryCode}
      </h2>

      <div id="current-temp-container">
        <ul>
          <li>
            <strong>
              ⚫️ -{" "}
              {isToday ? "Current Temperature" : "Expected Average Temperature"}
            </strong>
            <b>
              {getTemperature({
                isCelsius,
                temp: isToday ? temp : (min + max) / 2,
              })}
            </b>
          </li>
          <li>
            <strong>⚫️ - Weather Condition</strong>
            <b>{formatTitle(description)}</b>
          </li>
          <li>
            <strong>⚫️ - Highest Temperature</strong>
            <b>{getTemperature({ isCelsius, temp: max })}</b>
          </li>
          <li>
            <strong>⚫️ - Lowest Temperature</strong>
            <b>{getTemperature({ isCelsius, temp: min })}</b>
          </li>
        </ul>

        <img
          alt="icon"
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
