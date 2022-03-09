import React from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { logoutAsincrono } from "../redux/actions/actionLogin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { actionSearch } from "../redux/actions/actionSearch";
import Avatar from "../data/images/avatar.png";
import { ShowModal } from "../redux/actions/showModal";
import styled from 'styled-components';

const DivNav = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const NavIni = ({ isLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      search: "",
    },

    onSubmit: (data) => {
      dispatch(actionSearch(data.search));
    },
  });
  dispatch(actionSearch(formik.values.search));

  return (
    <>
      <Navbar sticky="top" className="navbarini">
       
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
            <Nav.Link onClick={() => navigate("/categorias/Insumos")}>
              Categorias
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/noticias")}>
              Noticias
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/laruta")}>
              La ruta del aguacate
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/simulador")}>
              Simulador
            </Nav.Link>
            <Nav.Link onClick={() => dispatch(ShowModal())}>
              Probar Modal
            </Nav.Link>
            <Nav.Link className='linkcuenta' onClick={() => navigate("/cuenta")}>
              Cuenta
            </Nav.Link>
          </Nav>
        
      </Navbar>
    </>
  );
};

export default NavIni;
