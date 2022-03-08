import React from "react";
import Footer from "../components/Footer";
import NavIni from "../components/NavIni";
import NavUser from "../components/NavUser";
import InfoUser from "../components/InfoUser";
import Progreso from "../components/Progreso";
import { Button } from "react-bootstrap";
import { logoutAsincrono } from "../redux/actions/actionLogin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cuenta = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <nav>
        <NavUser />
        <NavIni />
      </nav>

      <main
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <InfoUser />
          <br />
          <br />
          <Button
            variant="danger"
            onClick={() => {
              dispatch(logoutAsincrono());
              navigate("/");
            }}
          >
            Cerrar sesion
          </Button>
        </div>

        <div>
          <Progreso />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cuenta;
