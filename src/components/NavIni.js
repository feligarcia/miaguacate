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
    <div>
      <Navbar  sticky="top" className='navbarini'>
        <Container>
       
          <Navbar.Brand onClick={() => navigate("/")}></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
            <p id="clickinicio">.</p>
          </Nav>

          
        </Container>
      </Navbar>
    </div>
  );
};

export default NavIni;
