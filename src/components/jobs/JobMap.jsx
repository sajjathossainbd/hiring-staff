import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: markerShadow,
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

function JobMap() {
  const center = [23.8103, 90.4125]; // Example coordinates (Dhaka)
  return (
    <div className="border border-lightGray p-6 rounded-xl z-0">
      <MapContainer
        center={center}
        zoom={10}
        style={{ height: "200px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            {company}
            <br />
            {position}
          </Popup>
        </Marker>
      </MapContainer>
      <div className="contact-info">
        <h4 className="mb-3 mt-2">Contact Us</h4>
        <p>
          <h5 className="inline-block">Address:</h5>
          <br />
          205 North Michigan Avenue, Suite 810
          <br />
          Chicago, 60601, USA
        </p>
        <p>
          <h5 className="inline-block">Phone:</h5> (123) 456-7890
        </p>
        <p>
          <h5 className="inline-block">Email:</h5>{" "}
          <a href="mailto:contact@Evara.com">contact@Evara.com</a>
        </p>
      </div>
    </div>
  );
}

export default JobMap;
