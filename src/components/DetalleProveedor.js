import React from "react";
import NavIni from "./NavIni";
import NavUser from "./NavUser";
import styled from "styled-components";
import Footer from "./Footer";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { negocios } from "../data/dbNegocios";
import { useParams } from "react-router-dom";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;


L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Div = styled.div`
  margin: 80px 0;

  & .flex {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items:center;
    margin-bottom: 80px;
    background-color: rgba(0,0,0,0.1);

    & .perfil-proveedor {
      margin: 0 150px;

      & .foto-proveedor {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        object-fit: cover;
      }
    }

    & .negocio-proveedor {
      & img {
        width: 300px;
      }
    }
  }

  & .ubicacion {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

  }
`;
const DivMapa = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  height: 300px;
  width:100%;
`;
const DetalleProveedor = () => {
  const params = useParams();
  console.log(params)
  const negocioDetail = negocios.filter(e=>e.id === params.id)
  console.log(negocioDetail)
  return (
    <div>
      <NavUser />
      <NavIni />
      
{negocioDetail.map(e=>(
  <Div key={e.id}>
        <div className="flex">
          <div className="perfil-proveedor">
            {/* <img
              className="foto-proveedor"
              src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
              alt="foto del proveedor"
            /> */}
             <h2>{e.nombre}</h2>
              <p>{e.categoria}</p>
              <p>{e.contacto}</p>
              <p>{e.metadata}</p>
          </div>

          <div className="negocio-proveedor">
            <img
              src={e.bsimage}
              alt="negocio-proveedor"
            />
          </div>
        </div>

        <div className="ubicacion">
          <h1>Ubicacion</h1>
          <DivMapa>
            <MapContainer
              center={e.gps}
              zoom={13}
              style={{ width: "100%", height: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={e.gps}>
                <Popup>{e.nombre} <br></br> {e.contacto}</Popup>
              </Marker>
            </MapContainer>
          </DivMapa>
        </div>
      </Div>

))}
      

      <Footer />
    </div>
  );
};

export default DetalleProveedor;
