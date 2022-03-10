import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Footer from "../components/Footer";
import NavIni from "../components/NavIni";
import NavUser from "../components/NavUser";
import TableInver from "../components/TableInver";
import styled from "styled-components";
import Charts from "../components/Charts";
import { useDispatch, useSelector } from "react-redux";
import { setCredito, setSimula } from "../redux/actions/actionSimulador";

const DivSimu = styled.div`
  margin: 35px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const DivTable = styled.div`
  margin: 0 auto;
`;
const DivCreditos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
`;
const DivDesCreditos = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 20px;
  &:hover {
    box-shadow: 2px 2px 2px;
  }

  img {
    width: 100px;
    height: 100px;
  }
  h3 {
    color: grey;
  }
  p {
    color: grey;
  }
`;

const DivInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    width: 50px;
  }
`;

const Simulador = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSimula());
  }, []);

  return (
    <>
      <NavUser />
      <NavIni />
      <DivSimu>
        <h1> Simulador financiero </h1>
        <DivInput>
          <label htmlFor="hectareasfarm" className="">
            Ingrese area del lote en hectareas:
          </label>
          <input
            type="number"
            id="hectareasfarm"
            placeholder="1"
            className="form-control"
          ></input>
        </DivInput>
        <DivTable className="table-responsive-sm">
          <TableInver />
        </DivTable>
        <br></br>
        <Charts />
        <Button variant="success">Iniciar simulacion</Button>
        <br></br>
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
            <h4>40%</h4>
          </DivTarjeta>
          <DivTarjeta
            className="tarjeta"
            style={{ background: "rgba(217, 234, 123, 100)" }}
          >
            <p>VPN</p>
            <h4> $7.463.830.174</h4>
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
      <DivCreditos>
        <DivDesCreditos
          onClick={() =>{
            // dispatch(clearSimulacion())
            dispatch(
              setCredito([
                {
                  item: "Interes",
                  ano0: 0,
                  ano1: 0,
                  ano2: 0,
                  ano3: 0,
                  ano4: 0,
                  ano5: 0,
                },
                {
                  item: "Amortización",
                  ano0: 0,
                  ano1: 0,
                  ano2: 0,
                  ano3: 0,
                  ano4: 0,
                  ano5: 0,
                },
                {
                  item: "Gastos financieros",
                  ano0: 0,
                  ano1: 0,
                  ano2: 0,
                  ano3: 0,
                  ano4: 0,
                  ano5: 0,
                },
              ])
            )
          }}
        >
          <img alt ='' src="https://upload.wikimedia.org/wikipedia/commons/4/41/Imagen_corporativa_FINAGRO.jpg" />
          <h3>Credito DTF</h3>
          <p>Cuota Inicial: $3'000.000</p>
          <p>Monto máximo: $284.000.000</p>
          <p>Plazos: 1-5años</p>
          <p>Tasa: DTF + 1.5% EA</p>
          <p>Aplica subsidio a la tasa joven agricultor</p>
        </DivDesCreditos>
        <DivDesCreditos>
          <img alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Banco_Agrario_de_Colombia_logo.svg/1200px-Banco_Agrario_de_Colombia_logo.svg.png" />
          <h3>Colombia Agro Produce</h3>
          <p>Periodo de gracia hasta 1 año</p>
          <p>Monto máximo: $100.000.000</p>
          <p>Plazos: 1-3años credito y subsidio</p>
          <p>Tasa: DTF + 1% EA</p>
          <p>Aplica subsidio pequeño productor</p>
        </DivDesCreditos>
        <DivDesCreditos>
          <img alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/BBVA_2019.svg/2560px-BBVA_2019.svg.png" />
          <h3>Agrocredito</h3>

          <p>Monto máximo: según capacidad pago</p>
          <p>Plazos: 2 años</p>
          <p>Tasa: DTF + 7% EA</p>
          <p>Sin comisión para estudio</p>
        </DivDesCreditos>
      </DivCreditos>
      <Footer />
    </>
  );
};

export default Simulador;
