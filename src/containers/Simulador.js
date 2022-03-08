import React from "react";
import { Button } from "react-bootstrap";
import Footer from "../components/Footer";
import NavIni from "../components/NavIni";
import NavUser from "../components/NavUser";
import TableInver from "../components/TableInver";
import styled from "styled-components";
import Charts from "../components/Charts";

const DivSimu = styled.div`
  margin: 35px 30px;
`;
const DivResults = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
`;
const DivTarjeta = styled.div`
  margin: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Simulador = () => {
  return (
    <>
      <NavUser />
      <NavIni />
      <DivSimu>
        <h1> Simulador financiero </h1>
        <TableInver />
        <Charts />
        <Button variant="success">Iniciar simulacion</Button>
        <DivResults>
          <DivTarjeta
            className="tarjeta"
            style={{ background: "rgba(0, 189, 93, 0.39)" }}
          >
            <p>Valor por ha:</p>
            <h4>25.000.000</h4>
          </DivTarjeta>
          <DivTarjeta
            className="tarjeta"
            style={{ background: "rgba(163, 230, 137, 100)" }}
          >
            <p>Inversión total</p>
            <h4>250.000.000</h4>
          </DivTarjeta>
          <DivTarjeta
            className="tarjeta"
            style={{ background: "rgba(87, 169, 55, 100)" }}
          >
            <p>TIR</p>
            <h4>10%</h4>
          </DivTarjeta>
          <DivTarjeta
            className="tarjeta"
            style={{ background: "rgba(217, 234, 123, 100)" }}
          >
            <p>VPN</p>
            <h4>Calcular%</h4>
          </DivTarjeta>
          <DivTarjeta
            className="tarjeta"
            style={{ background: "rgba(255, 226, 110, 100)" }}
          >
            <p>VPN</p>
            <h4>Calcular%</h4>
          </DivTarjeta>
          <DivTarjeta
            className="tarjeta"
            style={{ background: "rgba(255, 240, 130, 100)" }}
          >
            <p>Equilibrio</p>
            <h4>3,5años</h4>
          </DivTarjeta>
        </DivResults>
      </DivSimu>
      <Footer />
    </>
  );
};

export default Simulador;
