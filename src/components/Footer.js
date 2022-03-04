import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import LogoNavCo from "../styles/LogoNavCo";

const DivFooter = styled.footer`
  position: relative;
  bottom: 0;
  background-color: #833403;
  height: 250px;
`;
const Plink = styled.p`
  color: white;
`;

const Footer = () => {
  return (
    <DivFooter>
      <Container fluid="md">
        <Row>
          <Col>
            <LogoNavCo />
          </Col>
          <Col>
            <Plink>Inicio</Plink>
            <Plink>Mi cuenta</Plink>
            <Plink>Simulador</Plink>
            <Plink>Proveedores</Plink>
          </Col>
          <Col md="auto">3</Col>
        </Row>
      </Container>
    </DivFooter>
  );
};

export default Footer;
