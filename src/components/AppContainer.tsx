import React, { useEffect } from "react";
import "./css/AppContainer.css";
import CloudsContainer from "./CloudsContainer";
import ForecastContainer from "./ForecastContainer";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../store/slices/weatherSlice";

export default function AppContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather("islamabad"));

    // eslint-disable-next-line
  }, []);
  return (
    <div id="app-container">
      <ForecastContainer />
      <CloudsContainer />
    </div>
  );
}
