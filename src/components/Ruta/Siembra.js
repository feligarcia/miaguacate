import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Timeline.css";
import Footer from "../Footer";
import NavIni from "../NavIni";
import NavUser from "../NavUser";
import styled from "styled-components";

const BORRAR = styled.div`
height:500px;
`

const Siembra = () => {
  return (
    <>
      <NavUser />
      <NavIni />
      <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
        <div className="timeline__event__icon">
          <i className="lni-slim"></i>
          <div className="timeline__event__date">3</div>
        </div>
        <div className="timeline__event__content">
          <div className="timeline__event__title">Siembra</div>
          <div className="timeline__event__description">
            <p>
              El primera paso más importante en el establecimiento del cultivo,
              hacer una buena siembre nos implicará menos gastos en el futuro.
            </p>
          </div>
        </div>
      </div>
      <BORRAR></BORRAR>
      <Footer />
    </>
  );
};

export default Siembra;
