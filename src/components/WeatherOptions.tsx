import React from "react";
import "./css/WeatherOptions.css";
import Option from "./Option";

interface schema {
  options: {
    title: string;
    icon: JSX.Element;
  }[];
  onClick: (arg: string, index: number) => void;
  activeIndex: number
}
export default function WeatherOptions({ options, onClick, activeIndex }: schema) {
  return (
    <div id="weather-options-container">
      {options.map(({ title, icon }, index) => (
        <Option
          key={index}
          title={title}
          icon={icon}
          isActive={index === activeIndex}
          index={index}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
