import React, { useCallback, useState } from "react";
import "./css/CloudsContainer.css";
import { TiWeatherWindy, TiWeatherCloudy } from "react-icons/ti";
import { FaTemperatureLow } from "react-icons/fa";
import TemperatureConvertorContainer from "./TemperatureConvertorContainer";
import WeatherMap from "./WeatherMap";
import WeatherOptions from "./WeatherOptions";

const options = [
  { title: "Clouds", icon: <TiWeatherCloudy />, layer: "clouds_new" },
  {
    title: "Precipitation",
    icon: <TiWeatherWindy />,
    layer: "precipitation_new",
  },
  { title: "Temperature", icon: <FaTemperatureLow />, layer: "temp_new" },
];
export default function CloudsContainer() {
  const [activeOption, setActiveOption] = useState({
    index: 2,
    layer: options[2].layer,
  });

  const onSelect = useCallback((_, index) => {
    setActiveOption({
      index,
      layer: options[index].layer,
    });
  }, []);

  return (
    <div id="clouds-container">
      <WeatherOptions
        options={options}
        activeIndex={activeOption.index}
        onClick={onSelect}
      />
      <WeatherMap layer={activeOption.layer} />
      <TemperatureConvertorContainer />
    </div>
  );
}
