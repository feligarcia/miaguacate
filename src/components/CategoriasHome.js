import React from "react";
import { Div, TarjetaWrap } from "../styles/CategoriasStyle";
import { useNavigate } from "react-router-dom";
import CategoriasDetalle from "../containers/CategoriasDetalle";

const CategoriasHome = () => {
  const navigate = useNavigate();

  const handleCategorias = (e) => {
    navigate(`/categorias/${e}`);
  };


  // const handleCategorias = name => {

  //   useEffect(() => {
  //     nameCategoria()
  //   }, [name])
  
  //   navigate('/categorias/:name')
  //   const nameCategoria = CategoriasDetalle(name)

  // }

        //     <div className="info">
        //       <p>
        //         Las herramientas como palas, azadones, machetes y otros los
        //         puedes encontrar con nuestros mejores proveedores
        //       </p>
        //     </div>
        //   </div>
        // </TarjetaWrap>

  return (
    <div>

      <Div>
        <div className="line-tarjeta">
            <TarjetaWrap className="TarjetaWrap" style={{background:'rgba(0, 189, 93, 0.39)'}} onClick={() => handleCategorias('Herramientas y maquinaria')}>
              <div className="tarjeta">
                  <div className="adelante">
                      <h2>Herramientas y maquinaria</h2>
                  </div>

                    <div className="info">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>  
                    </div>
              </div>
            </TarjetaWrap>

            <TarjetaWrap className="TarjetaWrap" style={{background:'rgba(163, 230, 137, 100)'}} onClick={() => handleCategorias('Insumos')}>
              <div className="tarjeta">
                  <div className="adelante">
                      <h2>Insumos</h2>
                  </div>

                    <div className="info">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>  
                    </div>
              </div>
            </TarjetaWrap>

            <TarjetaWrap className="TarjetaWrap" style={{background:'rgba(87, 169, 55, 100)'}}>
              <div className="tarjeta">
                  <div className="adelante">
                      <h2>Financiación</h2>
                  </div>

                    <div className="info">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>  
                    </div>
              </div>
            </TarjetaWrap>
        </div>

        <div className="line-tarjeta">
          <TarjetaWrap className="TarjetaWrap" style={{background:'rgba(217, 234, 123, 100)'}} onClick={() => handleCategorias('Financiación')}>
            <div className="tarjeta">
                <div className="adelante">
                    <h2>Comercialización</h2>
                </div>

                  <div className="info">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>  
                  </div>
            </div>
          </TarjetaWrap>

          <TarjetaWrap className="TarjetaWrap" style={{background:'rgba(255, 240, 130, 100)'}} onClick={() => handleCategorias('Comercialización')}>
            <div className="tarjeta">
                <div className="adelante">
                    <h2>Administración</h2>
                </div>

                  <div className="info">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>  
                  </div>
            </div>
          </TarjetaWrap>

          <TarjetaWrap className="TarjetaWrap" style={{background:'rgba(255, 226, 110, 100)'}} onClick={() => handleCategorias('Administración')}>
            <div className="tarjeta">
                <div className="adelante">
                    <h2>Mano de obra</h2>
                </div>

                  <div className="info">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>  
                  </div>
            </div>
          </TarjetaWrap>
        </div>


        <div className="line-tarjeta">
          <TarjetaWrap className="TarjetaWrap" style={{background:'rgba(226, 174, 131, 100)'}} onClick={() => handleCategorias('Control fitosanitario')}>
            <div className="tarjeta">
                <div className="adelante">
                    <h2>Control fitosanitario</h2>
                </div>

                  <div className="info">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>  
                  </div>
            </div>
          </TarjetaWrap>

          <TarjetaWrap className="TarjetaWrap" style={{background:'rgba(213, 141, 73, 100)'}} onClick={() => handleCategorias('Certificaciones')}>
            <div className="tarjeta">
                <div className="adelante">
                    <h2>Certificaciones</h2>
                </div>

                  <div className="info">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>  
                  </div>
            </div>
          </TarjetaWrap>

          <TarjetaWrap className="TarjetaWrap" style={{background:'rgba(200, 110, 55, 100)'}} onClick={() => handleCategorias('Estudios y mapas')}>
            <div className="tarjeta">
                <div className="adelante">
                    <h2>Estudios y mapas</h2>
                </div>

                  <div className="info">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>  
                  </div>
            </div>
          </TarjetaWrap>
        </div>
      </Div>

    </div>
  );
};

export default CategoriasHome;
