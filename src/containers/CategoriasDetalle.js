import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CategoriasHome from "../components/CategoriasHome";
import Footer from "../components/Footer";
import NavIni from "../components/NavIni";
import NavUser from "../components/NavUser";
import styled from "styled-components";

const DivLista = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 50px auto;
`;
const DivItemBus = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`;
const DivDes = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoriasDetalle = () => {
  const navigate = useNavigate();
  const params = useParams();
  
  const location = useSelector((store) => store.user.location);
  console.log(params)
  return (
    <div>
        <NavUser />
        <NavIni />

        <DivLista  className="list-group">
        <h1>{params.name}</h1>
        <br></br>
        <input type="text"></input>
        <Button variant="warning">Buscar</Button>
        <br></br>
        <b>{location ? "🏠" + location : null}</b>

        <DivItemBus className="list-group-item" onClick={()=>navigate(`${params}`)}>
          <DivDes>
            <h1>Agronegocios Don JuanCarlos</h1>
            <p>Cel. 3007878790</p>
          </DivDes>
          <p>lon:75.000,lat:-45.123</p>
        </DivItemBus>
        <DivItemBus className="list-group-item">
          <DivDes>
            <h1>Viveros Mi Guadua</h1>
            <p>Cel. 3029191919</p>
          </DivDes>
          <p>lon:75.000,lat:-45.123</p>
        </DivItemBus>
        <DivItemBus className="list-group-item">
          <DivDes>
            <h1>Ferreteria La Abundancia</h1>
            <p>Cel. 6042019281</p>
          </DivDes>
          <p>lon:75.000,lat:-45.123</p>
        </DivItemBus>
      </DivLista>

        <CategoriasHome />

        <Footer />
    </div>
  );
};

export default CategoriasDetalle;
