import React from 'react';
import NavIni from './NavIni';
import NavUser from './NavUser';
import styled from "styled-components";
import Footer from "./Footer"

const Div = styled.div `
  margin: 80px 0;

  & .flex {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 80px;

    & .perfil-proveedor {
      margin: 0 150px;

      & .foto-proveedor {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        object-fit: cover;
      }
    }

    & .negocio-proveedor {

      & img {
      width: 650px;
      }
    }
  }

  & .ubicacion{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & img {
      width: 1150px;
      height: 250px;
      object-fit: cover;
    }
  }
`

const DetalleProveedor = () => {
  return (
    <div>
        <NavUser />
        <NavIni />
        <h1>Detalle proveedor</h1>

      <Div>
        <div className="flex">
            <div className="perfil-proveedor">
              <img className="foto-proveedor" src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" alt="foto del proveedor"/>
              <h4>Nombre</h4>
              <h4>Tipo de servicio</h4>
              <h4>Contacto</h4>
            </div>

            <div className="negocio-proveedor">
              <img src="https://www.agromaquinaria.es/empresas/fotos/170.jpg" alt="negocio-proveedor" />
            </div>
        </div>

        <div className="ubicacion">
          <h1>Ubicacion</h1>
          <img className="ubicacion-proveedor" src="https://depor.com/resizer/L1M5aABYUluI0652Au5PL5fHu7w=/620x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/PH3PWFC47JC7DEUR7RNSBE4Q5Y.jpg" alt="ubicacion-proveedor" />
        </div>
      </Div>

      <Footer />
    </div>

  )
}

export default DetalleProveedor