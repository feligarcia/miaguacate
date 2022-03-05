import { Routes, Route, Navigate } from "react-router-dom";
import { ModalIni } from "../components/ModalIni";
import CategoriasDetalle from "../containers/CategoriasDetalle";
import Cuenta from "../containers/Cuenta";
import Home from "../containers/Home";
import RutaHass from "../containers/RutaHass";
import Simulador from "../containers/Simulador";

export const ListRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="laruta" element={<RutaHass />} />
        <Route path="simulador" element={<Simulador />} />
        <Route path="categorias/:name" element={<CategoriasDetalle />} />
        <Route path="cuenta" element={<Cuenta />} />
        <Route path="encuesta" element={<ModalIni />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
