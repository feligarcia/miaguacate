import LogoNavCo from "../styles/LogoNavCo";
import React from "react";
import { Button } from "react-bootstrap";
import {useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar from "../data/images/avatar.png";
import styled from "styled-components";

const DivNavUser = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 0;
  justify-content: space-between;
`;

const DivUserinfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & h5 {
    color: #7b421b;
    font-weight: 600;
  }
`;
const DivSesionUser = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavUser = () => {
  const navigate = useNavigate();
  const location = useSelector((store) => store.user.location);
  const getUserLocalST =
    JSON.parse(localStorage.getItem("usermiaguacate")) || [];
  const { displayName, uid, photoURL, usertype } = getUserLocalST;
  

  

  return (
    <DivNavUser>
      <LogoNavCo />
      <DivSesionUser>
        <DivUserinfo>
          <h3>{displayName}</h3>
          <h5>{usertype}</h5>
          <b>{location ? "🏠" + location : null}</b>
        </DivUserinfo>

        {uid ? (
          <>
            <img
              alt=""
              src={getUserLocalST ? photoURL : Avatar}
              className="icon-avatar"
              onClick={() => navigate("/cuenta")}
              style={{
                width: "80px",
                height: "80px",
                margin: "10px",
                objectFit: "cover",
              }}
            />
          </>
        ) : (
          <Button variant="primary" onClick={() => navigate("/login")}>
            Ingresar
          </Button>
        )}
      </DivSesionUser>
    </DivNavUser>
  );
};

export default NavUser;
