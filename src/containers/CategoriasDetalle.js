import React from "react";
import { useParams } from "react-router-dom";
import CategoriasHome from "../components/CategoriasHome";
import Footer from "../components/Footer";
import NavIni from "../components/NavIni";
import NavUser from "../components/NavUser";

const CategoriasDetalle = () => {
  const params = useParams();

  return (
    <div>
      <NavUser />
      <NavIni />
      <h1>{params.name}</h1>
      <CategoriasHome />
      <Footer />
    </div>
  );
};

export default CategoriasDetalle;
