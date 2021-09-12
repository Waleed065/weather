import axios from "axios";
import { weatherApi } from "../constants/general";

interface schema {
    query: string;
    countryCode: string;
}
const coordsByZipcode = ({query, countryCode}:schema) => `https://api.openweathermap.org/geo/1.0/zip?zip=${query},${countryCode}&appid=${weatherApi}`

export default async function getCoordsByZipcode({query, countryCode}:schema) {
  try {
    const response = await axios.get(coordsByZipcode({query, countryCode}));

    const {lat, lon, name} = response.data;

    return {lat, lon, city: name};
  } catch (err) {
    throw err;
  }
}
