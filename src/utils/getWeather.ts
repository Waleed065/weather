import axios from "axios";
import { weatherApi } from "../constants/general";

interface schema {
  lat: number;
  lon: number;
}
const weather = ({ lat, lon }: schema) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${weatherApi}`;

export default async function getWeather({ lat, lon }: schema) {
  try {
    const response = await axios.get(weather({ lat, lon }));
    return response.data;
  } catch (err) {
    throw err;
  }
}
