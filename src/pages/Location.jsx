import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MapView from "../components/MapView";

export default function Location() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    // Mock data – replace with your API call or JSON
    const places = [
      {
        id: "puri-jagannath-temple",
        name: "Puri Jagannath Temple",
        description: "One of the Char Dham pilgrimage sites in India.",
        latitude: 19.8048,
        longitude: 85.8174,
      },
      {
        id: "konark-sun-temple",
        name: "Konark Sun Temple",
        description: "A UNESCO World Heritage site in Odisha.",
        latitude: 19.8876,
        longitude: 86.0945,
      },
    ];

    const selectedPlace = places.find((p) => p.id === id);
    setPlace(selectedPlace);
  }, [id]);

  if (!place) return <p className="text-gray-500">Loading location...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800">{place.name}</h1>
      <p className="text-gray-600 mt-2">{place.description}</p>

      {/* MapView gets coords + name */}
      <MapView
        latitude={place.latitude}
        longitude={place.longitude}
        name={place.name}
      />
    </div>
  );
}
