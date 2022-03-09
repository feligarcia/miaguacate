import { Routes, Route, Navigate } from "react-router-dom";
import DetalleProveedor from "../components/DetalleProveedor";
import { ModalIni } from "../components/ModalIni";
import Siembra from "../components/Ruta/Siembra";
import Aguacate from "../components/Ruta/Aguacate";
import Terreno from "../components/Ruta/Terreno";
import Mantenimiento from "../components/Ruta/Mantenimiento";
import CategoriasDetalle from "../containers/CategoriasDetalle";
import Cuenta from "../containers/Cuenta";
import Home from "../containers/Home";
import RutaHass from "../containers/RutaHass";
import Simulador from "../containers/Simulador";
import Noticias from "../containers/Noticias";
import Noticia1 from "../components/noticias/Noticia1";
import Noticia2 from "../components/noticias/Noticia2";
import Noticia3 from "../components/noticias/Noticia3";
import Noticia4 from "../components/noticias/Noticia4";

export const ListRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="laruta" element={<RutaHass />} />
        <Route path="laruta/siembra" element={<Siembra />} />
        <Route path="laruta/aguacate" element={<Aguacate />} />
        <Route path="laruta/terreno" element={<Terreno />} />
        <Route path="laruta/mantenimiento" element={<Mantenimiento />} />
        <Route path="simulador" element={<Simulador />} />
        <Route path="categorias/:name" element={<CategoriasDetalle />} />
        <Route path="categorias/:name/:id" element={<DetalleProveedor />} />
        <Route path="cuenta" element={<Cuenta />} />
        <Route path="encuesta" element={<ModalIni />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/noticia1" element={<Noticia1 />} />
        <Route path="/noticias/noticia2" element={<Noticia2 />} />
        <Route path="/noticias/noticia3" element={<Noticia3 />} />
        <Route path="/noticias/noticia4" element={<Noticia4 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
