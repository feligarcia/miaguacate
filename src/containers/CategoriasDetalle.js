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

        CategoriasDetalle

        <CategoriasHome />

        <Footer />
    </div>
  );
};

export default CategoriasDetalle;
