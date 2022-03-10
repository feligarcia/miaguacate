import React from "react";
import "../../styles/Timeline.css";
import Footer from "../Footer";
import NavIni from "../NavIni";
import NavUser from "../NavUser";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Div = styled.div `
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 100px 0;

  & div {
    width: 550px;

    & h1 {
      color: rgba(80, 180, 100, 100);
      text-align: center;
      margin: 30px 50px;

    }

    & p {
      font-size: 18px;
      margin: 30px 50px;
    }
  }

  & img {
    width: 550px;
    height: 450px;
    margin-bottom: 80px;
  }

  & button {
    background: lightgreen;
    border-radius: 7px;
    border: none;
    font-size: 18px;
    font-weight: 400;
    position: absolute;
    bottom: 0px;
    left: 450px;
    width: 120px;
    height: 50px;

  }
`

const Aguacate = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavUser />
      <NavIni />
      <Div>
        <div>
          <h1>El Aguacate</h1>
          <p>
          Entre las numerosas labores que determinan el rendimiento de un cultivo, la siembra y escarda son de las principales. Unas dosis de siembra adecuadas, con marcos de siembra correctos son cruciales para el desarrollo de la planta. Esto también está relacionado con las condiciones del suelo y el sistema de cultivo. De la siembra a voleo hasta la siembra de precisión neumática, hay toda una gama de herramientas y equipos que pueden mejorar las operaciones de siembra a la vez que se adaptan al contexto económico, social y ambiental del agricultor.
          </p>
        </div>

        <img src="https://www.jardineriaon.com/wp-content/uploads/2018/01/planta-del-aguacate.jpg" alt="img planta de aguacates" />
      
        <button onClick={()=>navigate('/laruta/terreno')} >Siguiente</button>
      </Div>

      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnfincap"
          id="btnfincapF"
          autocomplete="off"
        />
        <label className="btn btn-outline-success" htmlFor="btnfincapF">
          Finalizado
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnfincap"
          id="btnfincapP"
          autocomplete="off"
          checked
        />
        <label className="btn btn-outline-secondary" htmlFor="btnfincapP">
          Pendiente
        </label>
      </div>
      <Footer />
    </>
  );
};

export default Aguacate;