import React, { useCallback, useState } from "react";
import "./css/TemperatureConvertorContainer.css";
import { useSelector } from "react-redux";
import moment from "moment";
import { StateType } from "../types";
import getTemperature from "../utils/getTemperature";
import TemperatureConvertor from "./TemperatureConvertor";
import { getActiveWeather } from "../store/slices/weatherSlice";
import Option from "./Option";
import { WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { GiImpactPoint, GiWindSlap } from "react-icons/gi";
import Clock from "./Clock";
import getDay from "../utils/day";

interface detailsType {
  [key: string]: {
    heading: string;
    title: string;
  }[];
}

/* constants */
const sun_rise = "Sunrise";
const sun_set = "Sunset";
const speed = "Wind Speed";
const humidity_in_air = "Humidity";
const atom_pressure = "Pressure";

const options = [
  {
    title: sun_rise,
    icon: <WiSunrise />,
  },
  {
    title: sun_set,
    icon: <WiSunset />,
  },
  {
    title: speed,
    icon: <GiWindSlap />,
  },
  {
    title: humidity_in_air,
    icon: <WiHumidity />,
  },
  {
    title: atom_pressure,
    icon: <GiImpactPoint />,
  },
];

/* -------------- */

export default function TemperatureConvertorContainer() {
  const isCelsius = useSelector((state: StateType) => state.isCelsius);
  const {
    temp: { morn, day, eve, night, min, max },
    sunrise,
    sunset,
    timezone,
    dt,
    humidity,
    pressure,
    wind_deg,
    wind_gust,
    wind_speed,
    dew_point,
    uvi,
    country,
    city,
    clouds,
    pop
  } = useSelector(getActiveWeather);
  const weather = useSelector((state: StateType) => state.weather);
  const temp = weather.current.temp
  const [activeOption, setActiveOption] = useState({
    title: options[0].title,
    index: 0,
  });

  const onClickOption = useCallback((title: string, index: number) => {
    setActiveOption({
      title,
      index,
    });
  }, []);


  const details: detailsType = {
    [sun_rise]: [
      {
        heading: "Sunrise at",
        title: moment(sunrise * 1000).format("LT"),
      },
      {
        heading: "Temperature At Morning",
        title: getTemperature({ isCelsius, temp: morn }),
      },
      {
        heading: "Temperature At Day Time",
        title: getTemperature({ isCelsius, temp: day }),
      },
    ],
    [sun_set]: [
      {
        heading: "Sunset At",
        title: moment(sunset * 1000).format("LT"),
      },
      {
        heading: "Temperature At Evening",
        title: getTemperature({ isCelsius, temp: eve }),
      },
      {
        heading: "Temperature At Night",
        title: getTemperature({ isCelsius, temp: night }),
      },
    ],
    [speed]: [
      {
        heading: "Wind Speed",
        title: `${wind_speed} km/h`,
      },
      {
        heading: "Wind Degree",
        title: `${wind_deg} °`,
      },
      {
        heading: "Wind Gust",
        title: `${wind_gust} knots`,
      },
    ],
    [humidity_in_air]: [
      {
        heading: "Humidity",
        title: `${humidity}%`,
      },
      {
        heading: "Dew Point",
        title: `${dew_point} °C`,
      },
      {
        heading: "Cloudiness",
        title: `${clouds}%`,
      },
    ],
    [atom_pressure]: [
      {
        heading: "Pressure",
        title: `${pressure} mbar`,
      },
      {
        heading: "Ultra Violent Radiations",
        title: `${uvi}`,
      },
      {
        heading: "Probability Of Rain",
        title: `${(pop * 100).toFixed(0)}%`,
      },
    ],
  };

  const weekday = getDay(dt);
  const isToday = weekday === "Today";

  return (
    <div id="temperature-convertor-container">
      <div id="temperature-div">
        <h3>Temperature Converter</h3>
        <TemperatureConvertor />

        <h3>
          {getTemperature({
            isCelsius,
            temp: isToday ? temp : (min + max) / 2,
          })}
        </h3>
      </div>

      <Clock dt={dt} />

      <div id="options-grid">
        {options.map(({ title, icon }, index) => (
          <Option
            key={index}
            title={title}
            icon={icon}
            isActive={index === activeOption.index}
            index={index}
            onClick={onClickOption}
          />
        ))}
      </div>

      <ul>
        {details[activeOption.title]?.map(({ heading, title }, index) => (
          <li key={index}>
            <span className="temperature-point">
              <b>{heading}</b>

              <label>{title}</label>
            </span>
          </li>
        ))}
        <li>
          <span className="temperature-point">
            <b>Location</b>

            <label>
              {city}/{country}
            </label>
          </span>
        </li>
        <li>
          <span className="temperature-point">
            <b>Timezone</b>

            <label>{timezone}</label>
          </span>
        </li>
      </ul>
    </div>
  );
}
