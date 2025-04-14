import React, { useEffect, useState } from "react";
//import 'leaflet/dist/leaflet.css';//

const SentimentMap = ({ tweets }) => {
  const [leafletComponents, setLeafletComponents] = useState(null);

  useEffect(() => {
    import("react-leaflet").then((L) => {
      setLeafletComponents({
        MapContainer: L.MapContainer,
        TileLayer: L.TileLayer,
        Marker: L.Marker,
        Popup: L.Popup,
      });
    });
  }, []);

  if (!leafletComponents) return <p>🔄 Carregando mapa...</p>;

  const { MapContainer, TileLayer, Marker, Popup } = leafletComponents;

  return (
    <div className="bg-white p-6 rounded-lg shadow w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">📍 Mapa de Sentimentos</h2>
      <MapContainer
        center={[-14.235, -51.9253]}
        zoom={4}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {tweets.map((tweet, index) => (
          <Marker
            key={index}
            position={[-23 + Math.random() * 10, -46 + Math.random() * 10]}
          >
            <Popup>
              <p className="font-medium">{tweet.text}</p>
              <p><strong>{tweet.sentiment}</strong></p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default SentimentMap;
