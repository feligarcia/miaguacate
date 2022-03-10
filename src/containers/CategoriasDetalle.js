import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CategoriasHome from "../components/CategoriasHome";
import Footer from "../components/Footer";
import NavIni from "../components/NavIni";
import NavUser from "../components/NavUser";
import styled from "styled-components";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { negocios } from "../data/dbNegocios";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});




const DivMapa = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 95vw;

  .mapades {
    width: 50vw;
  }
  .sidebar {
    width: 50vw;
    overflow-y: scroll;
  }
  .list-group-item:hover {
    background-color: rgba(255, 240, 130, 0.418);
  }
`;

const CategoriasDetalle = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [map, setMap] = useState(null);
  const location = useSelector((store) => store.user.location);
  const userlocal = JSON.parse(localStorage.getItem("usermiaguacate")) || [];
  const position = userlocal.usergps;
  console.log(params);
  const negocioDetail = negocios.filter(e=>e.categoria === params.name)
  console.log(negocioDetail);
  const handleOnSetView = (pos) => {
    map.flyTo(pos, 15);
  };

  return (
    <div>
      <NavUser />
      <NavIni />
      <DivMapa>
        <MapContainer
          center={position}
          zoom={13}
          style={{ width: "100%", height: "100%" }}
          whenCreated={setMap}
          className="mapades"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {negocioDetail?.map((e) => (
            <Marker position={e.gps} key={e.id}>
              <Popup>
                {e.nombre} <br></br> {e.contacto}
              </Popup>
            </Marker>
          ))}
          <Marker position={position} className="ubicacionuser">
            <Popup>Tu ubicacion actual</Popup>
          </Marker>
        </MapContainer>

        <div className="sidebar list-group">
          {negocioDetail?.map((e) => (
            <div key={e.id} className="list-group-item">
              <h2>{e.nombre}</h2>
              <p>{e.categoria}</p>
              <p>{e.contacto}</p>
              <p>{e.metadata}</p>
              <div className="btn-group">
                <Button
                  variant="warning"
                  onClick={() => handleOnSetView(e.gps)}
                >
                  Ver en el mapa
                </Button>
                <Button
                  variant="success"
                  onClick={() => navigate(`/categorias/${params.name}/${e.id}`)}
                >
                  Detalles
                </Button>
              </div>
            </div>
          ))}
        </div>
      </DivMapa>

      <CategoriasHome />

      <Footer />
    </div>
  );
};

export default CategoriasDetalle;
