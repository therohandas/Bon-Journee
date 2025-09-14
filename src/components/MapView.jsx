// MapView: MapLibre + MapTiler Streets (light mode)
import React, { useState } from "react";
import Map, { Marker } from "react-map-gl/maplibre";

export default function MapView({ center = [20.5937, 78.9629], markers = [], zoom = 10 }) {
  const [viewport, setViewport] = useState({
    longitude: center[1],
    latitude: center[0],
    zoom: zoom,
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map
        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=YOUR_MAPTILER_KEY`}
        style={{ width: "100%", height: "100%" }}
        initialViewState={viewport}
        onMove={(evt) => setViewport(evt.viewState)}
      >
        {/* Main marker */}
        <Marker longitude={center[1]} latitude={center[0]} color="red" />

        {/* Extra markers */}
        {markers.map((pos, i) => (
          <Marker key={i} longitude={pos[1]} latitude={pos[0]} color="blue" />
        ))}
      </Map>
    </div>
  );
}
