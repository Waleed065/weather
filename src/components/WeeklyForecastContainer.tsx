import React from "react";
import "./css/WeeklyForcastContainer.css";
import { useSelector } from "react-redux";
import { StateType } from "../types";
import WeatherCard from "./WeatherCard";
import formatTitle from "../utils/formatTitle";
import { getActiveWeather } from "../store/slices/weatherSlice";

export default function WeeklyForecastContainer() {
  const { city, countryCode } = useSelector(getActiveWeather);
  const dailyForecasts = useSelector((state: StateType) => state.weather.daily);
  const isCelsius = useSelector((state: StateType) => state.isCelsius);
  const activeWeatherIndex = useSelector(
    (state: StateType) => state.activeWeatherIndex
  );

  return (
    <div id="weekly-forecast-container">
      <h2>
        Weekly forecast for {formatTitle(city)}/{countryCode}
      </h2>

      <div id="cards-container">
        {dailyForecasts.map((item, index) => (
          <WeatherCard
            key={index}
            item={item}
            isCelsius={isCelsius}
            isActive={index === activeWeatherIndex}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
