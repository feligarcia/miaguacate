import { Routes, Route, Navigate } from "react-router-dom";
import DetalleProveedor from "../components/DetalleProveedor";
import { ModalIni } from "../components/ModalIni";
import Siembra from "../components/Ruta/Siembra";
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
        <Route exact path="laruta" element={<RutaHass />} />
        <Route path="laruta/:ruta" element={<Siembra />} />
        <Route path="simulador" element={<Simulador />} />
        <Route path="categorias/:name" element={<CategoriasDetalle />} />
        <Route path="categorias/:name/:id" element={<DetalleProveedor />} />
        <Route path="cuenta" element={<Cuenta />} />
        <Route path="encuesta" element={<ModalIni />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
