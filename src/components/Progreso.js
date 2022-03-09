import React,{memo} from "react";
import styled from "styled-components";

const DivProgreso = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Hproceso = styled.h3`
  color:#77D353;
`;

const Progreso =  memo( () => {
  const getUserLocalST =  JSON.parse(localStorage.getItem("usermiaguacate")) || [];
  let paso = ''
switch (getUserLocalST.rutapro) {
  case 0:
    paso = '1. EL aguacate'
    break;
    case 1:
    paso = '2. La siembra'
    break;
    case 2:
    paso = '3. EL mantenimiento'
    break;
    case 3:
    paso = '4. EL 4'
    break;
    case 4:
    paso = '5. EL 5'
    break;
    case 5:
    paso = '6. EL 6'
    break;

  default:
    break;
}


  
  return (
    <DivProgreso>
      <h2> Donde vas en la ruta del aguacate: </h2>
      <br></br>
      <Hproceso>{paso}</Hproceso>
    </DivProgreso>
  );
});
export default Progreso;
