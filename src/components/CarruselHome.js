import React from "react";
import {
  ContainerSlider,
  ListaSlider,
  MenuSlider,
} from "../styles/CarruselStyle";
import { noticias } from '../data/dbNoticias'
import { useNavigate } from 'react-router-dom';


const CarruselHome = () => {

  const navigate = useNavigate()
  
  return (
    <div>
      <header>
        <ContainerSlider>
          <ListaSlider>
            <li id="slide1" onClick={() => navigate("/noticias/noticia1")}>
              <img
                src={noticias[0].img}
                alt="img de aguacate"
              />
              <div>
                <h4>
                  {noticias[0].titulo}
                </h4>
              </div>
            </li>

            <li id="slide2" onClick={() => navigate("/noticias/noticia2")}>
              <img
                src={noticias[1].img}
                alt="img de aguacate"
              />

              <div>
                <h4>
                  {noticias[1].titulo}
                </h4>
              </div>

            </li>

            <li id="slide3" onClick={() => navigate("/noticias/noticia3")}>
              <img
                src={noticias[2].img}
                alt="img de aguacate"
              />

              <div>
                <h4>
                  {noticias[2].titulo}
                </h4>
              </div>
            </li>

            <li id="slide4" onClick={() => navigate("/noticias/noticia4")}>
              <img
                src={noticias[3].img}
                alt="img de aguacate"
              />

              <div>
                <h4>
                  {noticias[3].titulo}
                </h4>
              </div>
            </li>
          </ListaSlider>
            
          
        </ContainerSlider>

        <MenuSlider>
          <li>
            <a href="#slide1">1</a>
          </li>

          <li>
            <a href="#slide2">2</a>
          </li>

          <li>
            <a href="#slide3">3</a>
          </li>

          <li>
            <a href="#slide4">4</a>
          </li>
        </MenuSlider>
      </header>
    </div>
  );
};

export default CarruselHome;
