import React from "react";
import { TarjetaWrap } from "../styles/CategoriasStyle";
import { useNavigate } from "react-router-dom";
import CategoriasDetalle from "../containers/CategoriasDetalle";

const CategoriasHome = () => {
  const navigate = useNavigate();

  const handleCategorias = (e) => {
    navigate(`/categorias/${e}`);
  };

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <div style={{ display: "flex" }}>
        <TarjetaWrap
          className="TarjetaWrap"
          style={{ background: "rgba(0, 189, 93, 0.39)" }}
          onClick={() => handleCategorias("herramientas y maquinaria")}
        >
          <div className="tarjeta">
            <div className="adelante">
              <h2>Herramientas y maquinaria</h2>
            </div>

            <div className="info">
              <p>
                Las herramientas como palas, azadones, machetes y otros los
                puedes encontrar con nuestros mejores proveedores
              </p>
            </div>
          </div>
        </TarjetaWrap>

        <TarjetaWrap
          className="TarjetaWrap"
          style={{ background: "rgba(163, 230, 137, 100)" }}
          onClick={() => handleCategorias("insumos")}
        >
          <div className="tarjeta">
            <div className="adelante">
              <h2>Insumos</h2>
            </div>

            <div className="info">
              <p>
                Aqui encuentras proveedores de fertilizantes, pesticidas,
                fungicidas.
              </p>
            </div>
          </div>
        </TarjetaWrap>

        <TarjetaWrap
          className="TarjetaWrap"
          style={{ background: "rgba(87, 169, 55, 100)" }}
          onClick={() => handleCategorias("financiacion")}
        >
          <div className="tarjeta">
            <div className="adelante">
              <h2>Financiacion</h2>
            </div>

            <div className="info">
              <p>
                Encuentra aqui información sobre tu financiación con creditos de
                bancos, cooperativas, subsidios del gobierno.
              </p>
            </div>
          </div>
        </TarjetaWrap>
      </div>

      <div style={{ display: "flex" }}>
        <TarjetaWrap
          className="TarjetaWrap"
          style={{ background: "rgba(217, 234, 123, 100)" }}
          onClick={() => handleCategorias("comercializacion")}
        >
          <div className="tarjeta">
            <div className="adelante">
              <h2>Comercializacion</h2>
            </div>

            <div className="info">
              <p>
                Encuentra empresas de comercialización para que vendas tus
                aguacates
              </p>
            </div>
          </div>
        </TarjetaWrap>

        <TarjetaWrap
          className="TarjetaWrap"
          style={{ background: "rgba(255, 240, 130, 100)" }}
          onClick={() => handleCategorias("administracion")}
        >
          <div className="tarjeta">
            <div className="adelante">
              <h2>Administracion</h2>
            </div>

            <div className="info">
              <p>
                Encuentra servicios de empresas y personas para la
                administración de tu empresa, contabilidad, ingenieros.
              </p>
            </div>
          </div>
        </TarjetaWrap>

        <TarjetaWrap
          className="TarjetaWrap"
          style={{ background: "rgba(255, 226, 110, 100)" }}
          onClick={() => handleCategorias("manodeobra")}
        >
          <div className="tarjeta">
            <div className="adelante">
              <h2>Mano de obra</h2>
            </div>

            <div className="info">
              <p>
                Encuentra empresas y personas naturales que te pueden proveer
                servicios de mano de obra para cada etapa de tu proceso
              </p>
            </div>
          </div>
        </TarjetaWrap>
      </div>

      <div style={{ display: "flex" }}>
        <TarjetaWrap
          className="TarjetaWrap"
          style={{ background: "rgba(226, 174, 131, 100)" }}
          onClick={() => handleCategorias("controlfito")}
        >
          <div className="tarjeta">
            <div className="adelante">
              <h2>Control Fitosanitario</h2>
            </div>

            <div className="info">
              <p>
                Encuentra laboratorios para tu hacer control fitosanitario de tu
                cultivo.
              </p>
            </div>
          </div>
        </TarjetaWrap>

        <TarjetaWrap
          className="TarjetaWrap"
          style={{ background: "rgba(213, 141, 73, 100)" }}
          onClick={() => handleCategorias("certificaciones")}
        >
          <div className="tarjeta">
            <div className="adelante">
              <h2>Certificaciones</h2>
            </div>

            <div className="info">
              <p>
                Encuentra información para sacar tu certificación de exportacion
                GlobalGAP.
              </p>
            </div>
          </div>
        </TarjetaWrap>

        <TarjetaWrap
          className="TarjetaWrap"
          style={{ background: "rgba(200, 110, 55, 100)" }}
          onClick={() => handleCategorias("estudios")}
        >
          <div className="tarjeta">
            <div className="adelante">
              <h2>Estudios y mapas</h2>
            </div>

            <div className="info">
              <p>
                Aqui puedes encontrar estudios, libros, mapas y otros recursos
                bibliograficos.
              </p>
            </div>
          </div>
        </TarjetaWrap>
      </div>
    </div>
  );
};

export default CategoriasHome;
