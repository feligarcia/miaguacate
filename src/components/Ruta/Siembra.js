import React from "react";
import "../../styles/Timeline.css";
import Footer from "../Footer";
import NavIni from "../NavIni";
import NavUser from "../NavUser";
import styled from "styled-components";


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

const Siembra = () => {
  return (
    <>
      <NavUser />
      <NavIni />
      <Div>
        <div>
          <h1>La siembra</h1>
          <p>
          Entre las numerosas labores que determinan el rendimiento de un cultivo, la siembra y escarda son de las principales. Unas dosis de siembra adecuadas, con marcos de siembra correctos son cruciales para el desarrollo de la planta. Esto también está relacionado con las condiciones del suelo y el sistema de cultivo. De la siembra a voleo hasta la siembra de precisión neumática, hay toda una gama de herramientas y equipos que pueden mejorar las operaciones de siembra a la vez que se adaptan al contexto económico, social y ambiental del agricultor.
          </p>
        </div>

        <img src="data:image/jpeg;base64,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" alt="img siembra" />
      
        <button>Siguiente</button>
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

export default Siembra;
