/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Default marker icon configuration
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: markerShadow,
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Component to update map center dynamically
function ChangeMapCenter({ center }) {
  const map = useMap(); // Access map instance
  map.setView(center); // Update map view to new center
  return null; // This component doesn't render anything visually
}

// Reusable Map component
function Map({ center, zoom, markers }) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{
        height: "87%",
        width: "100%",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      {/* Change the map center dynamically */}
      <ChangeMapCenter center={center} />

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {markers.map((marker, index) => (
        <Marker key={index} position={marker[0]}>
          <Popup>{marker[1]}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
