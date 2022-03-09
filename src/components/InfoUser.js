import React, { useEffect } from "react";
import Avatar from "../data/images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { locationAsincrono } from "../redux/actions/userLocation";

const InfoUser =  () => {
  const dispatch = useDispatch();

  const location = useSelector((store) => store.user.location);
  const getUserLocalST =  JSON.parse(localStorage.getItem("usermiaguacate")) || [];
  const { displayName, uid, photoURL, contact, bsname, bsimage, usergps, usertype } = getUserLocalST;

  useEffect(() => {
    dispatch(locationAsincrono());
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <img
          alt=""
          src={getUserLocalST ? photoURL : Avatar}
          className="icon-avatar"
          style={{
            width: "100px",
            height: "100px",
            margin: "10px",
            objectFit: "cover",
          }}
        />
      </div>

      <h3>{displayName}</h3>
      {/* <b>Ubicación actual: {location ? "🏠" + location : null}</b> */}
      <h4>{usertype}</h4>
      <h6>Contacto: {contact}</h6>
      <h6>Nombre finca: {bsname}</h6>
      <h6>Ubicación finca: {usergps}</h6>
    </div>
  );
};

export default InfoUser;
