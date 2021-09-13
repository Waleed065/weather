import React, { memo, useMemo,  } from "react";
import "./css/WeatherMap.css";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, LayersControl } from "react-leaflet";
import { useSelector } from "react-redux";
import { StateType } from "../types";
import { weatherApi } from "../constants/general";

interface schema {
  layer: string;
}
const WeatherMap = ({ layer }: schema) => {
  const { lat, lon } = useSelector((state: StateType) => state.weather);
  const coords = useMemo(() => [lat, lon] as LatLngExpression, [lat, lon]);

  return (
    <div id={"weather-map-container"}>
      <MapContainer
        key={`${lat}${lon}${layer}`}
        center={coords}
        zoom={5}
        style={{ height: "100%" }}
        scrollWheelZoom={false}
        zoomControl={true}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>

          <LayersControl.Overlay checked name="Show Weather Layer">
            <TileLayer
              url={`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${weatherApi}`}
            />
          </LayersControl.Overlay>
        </LayersControl>

        <Marker
          position={coords}
          // eventHandlers={{ click: () => showPreview(place) }}
        />
      </MapContainer>

    </div>
  );
};

export default memo(WeatherMap);
