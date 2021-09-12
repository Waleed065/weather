interface schema {
  isCelsius: boolean;
  temp: number;
}
export default function getTemperature({ isCelsius, temp }: schema) {
  return isCelsius
    ? temp.toFixed(2) + " °C"
    : getFahrenheitFromCelsius(temp);
}

function getFahrenheitFromCelsius(celsius: number) {
  return (celsius * (9 / 5) + 32).toFixed(2) + " °F";
}