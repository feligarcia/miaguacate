import styled from "styled-components";
import Logo from "../data/images/logo.png";
import React from 'react'


 const DivLogoNav = styled.div`
 display:flex;
 flex-direction:column;
  border-style: none;
  width: fit-content;
  margin: 5px;
 
`;
 const LogoNav = styled.div`
  background-image: url(${Logo});
  background-color: initial;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

 const TextLogoNav = styled.p`

font-family: 'Chewy', cursive;
color: #00BD5D;
font-size:26px;
`




function LogoLogin() {
  return (
    <DivLogoNav>

        <LogoNav></LogoNav>
        <TextLogoNav>miaguacate</TextLogoNav>
    </DivLogoNav>
  )
}

export default LogoLogin
