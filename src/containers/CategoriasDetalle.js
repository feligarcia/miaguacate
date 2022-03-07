import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
  const params = useParams();
  const location = useSelector((store) => store.user.location);
  return (
    <div>
      <NavUser />
      <NavIni />
      <DivLista>
        <h1>{params.name}</h1>
        <br></br>
        <input type="text"></input>
        <Button variant="info">Buscar</Button>
        <br></br>
        <b>{location ? "🏠" + location : null}</b>

        <DivItemBus>
          <DivDes>
            <h1>Agronegocios Don JuanCarlos</h1>
            <p>Cel. 3007878790</p>
          </DivDes>
        </DivItemBus>
        <DivItemBus>
          <DivDes>
            <h1>Viveros Mi Guadua</h1>
            <p>Cel. 3029191919</p>
          </DivDes>
        </DivItemBus>
        <DivItemBus>
          <DivDes>
            <h1>Ferreteria La Abundancia</h1>
            <p>Cel. 6042019281</p>
          </DivDes>
        </DivItemBus>
      </DivLista>
      <CategoriasHome />
      <Footer />
    </div>
  );
};

export default CategoriasDetalle;
