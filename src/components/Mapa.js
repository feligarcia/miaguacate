import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function Mapa() {
  const userlocal =  JSON.parse(localStorage.getItem("usermiaguacate")) || [];
  const position = userlocal.usergps;
  const name = userlocal.bsname;

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
        {name}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
