import { IconContext } from "react-icons";
import { RiCloudWindyFill, RiHazeFill } from "react-icons/ri";
import { WiDaySunny, WiStrongWind } from "react-icons/wi";
import {
  GiDustCloud,
  GiFluffyCloud,
  GiHeavyRain,
  GiRaining,
  GiSnowflake2,
  GiSunCloud,
} from "react-icons/gi";
import { IoMdCloudy, IoMdRainy } from "react-icons/io";
import { AiFillQuestionCircle, AiFillThunderbolt } from "react-icons/ai";
import { FiCloudRain } from "react-icons/fi";

interface iconsSchema {
  [name: string]: JSX.Element;
}
const icons: iconsSchema = {
  haze: <RiHazeFill />,
  "clear sky": <WiDaySunny />,
  smoke: <GiDustCloud />,
  "light rain": <IoMdRainy />,
  "few clouds": <GiSunCloud />,
  "scattered clouds": <RiCloudWindyFill />,
  "broken clouds": <GiFluffyCloud />,
  "shower rain": <GiHeavyRain />,
  "moderate rain": <FiCloudRain />,
  rain: <GiRaining />,
  thunderstorm: <AiFillThunderbolt />,
  snow: <GiSnowflake2 />,
  mist: <WiStrongWind />,
  "overcast clouds": <IoMdCloudy />,
};

interface schema {
  name: string;
  size?: string;
  color?: string;
}
export default function WeatherIcon({ name, size, color }: schema) {
  return (
    <IconContext.Provider
      value={{ color: color ?? "var(--themeMain)", size: size ?? "20px" }}
    >
      {icons[name.toLowerCase()] ?? <AiFillQuestionCircle />}
    </IconContext.Provider>
  );
}
