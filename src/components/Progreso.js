import React from "react";
import styled from "styled-components";

const DivProgreso = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Hproceso = styled.h3`
  color:#77D353;
`;

const Progreso = () => {
  return (
    <DivProgreso>
      <h2> En la ruta del aguacate vas en el paso: </h2>
      <br></br>
      <Hproceso>2. Siembra</Hproceso>
    </DivProgreso>
  );
};
export default Progreso;
