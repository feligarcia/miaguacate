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
import Avatar from '../data/images/avatar.png'
import Logo from '../data/images/logo.png'

const NavIni = ({ isLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUserLocalST = JSON.parse(localStorage.getItem("usermiaguacate")) || []
  const { displayName, email, photoURL } = getUserLocalST;
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
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
        <img alt='' src={Logo} className='logonav'/>
          <Navbar.Brand onClick={() => navigate("/")}></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
            <p id="clickinicio">.</p>
          </Nav>

          <form onSubmit={formik.handleSubmit}>
            {isLogin ? (
              <>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(logoutAsincrono());
                    navigate("/");
                  }}
                >
                  Cerrar sesion
                </Button>
                <img
                  alt=""
                  src={getUserLocalST ? photoURL : Avatar}
                  className="icon-avatar"
                  // onClick={() => window.open('/favorites','_self')}
                  onClick={() => navigate("/favorites")}
                  //al guardar pokemon se guarda objeto sin array y me muestra error, por eso se recarga favorites
                />
              </>
            ) : (
              <Button variant="primary" onClick={() => navigate("/login")}>
                Ingresar
              </Button>
            )}
          </form>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavIni;
