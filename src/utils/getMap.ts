import { weatherApi } from "../constants/general";

interface schema {
  z: number;
  x: number;
  y: number;
}
// const getMap = ({ z, x, y }: schema) =>
//   `https://tile.openweathermap.org/map/${"clouds"}/${z}/${x}/${y}.png?appid=${weatherApi}`;

const getMap = ({ z, x, y }: schema) =>`https://maps.openweathermap.org/maps/2.0/radar/${z}/${x}/${y}?appid=${weatherApi}`;


export default getMap;
