import axios from "axios";
import { weatherApi } from "../constants/general";

interface schema{
    query: string;
    countryCode: string;
}
const coordsByName = ({query, countryCode}:schema) =>
  `https://api.openweathermap.org/geo/1.0/direct?q=${query},${countryCode}&limit=1&appid=${weatherApi}`;
export default async function getCoordsByName({query, countryCode}:schema) {
  try {
    const response = await axios.get(coordsByName({query, countryCode}));
    const {lat, lon, name} = response.data[0];
    
    return {lat, lon, city: name};
  } catch (err) {
    throw err;
  }
}
