import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavIni from "../components/NavIni";
import NavUser from "../components/NavUser";
import "../styles/Timeline.css";

const RutaHass = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavUser />
      <NavIni />

      <div className="timeline">
        <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
          <div className="timeline__event__icon ">
            <i className="lni-cake"></i>
            <div className="timeline__event__date">1</div>
          </div>
          <div className="timeline__event__content ">
            <div className="timeline__event__title">El aguacate</div>
            <div className="timeline__event__description">
              <p>
                Todo lo que debes sobre esta maravillosa fruta que encanta a
                tantas personas en el mundo.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div className="timeline__event__icon">
            <i className="lni-burger"></i>
            <div className="timeline__event__date">2</div>
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">El terreno</div>
            <div className="timeline__event__description">
              <p>
                Tienes ya un terreno? Aprende sobre lo determinante de un
                terreno en el manejo de un cultivo.
              </p>
            </div>
          </div>
        </div>

        <div
          className="timeline__event animated fadeInUp delay-1s timeline__event--type3"
          
        >
          <div className="timeline__event__icon" onClick={()=>navigate("/laruta/siembra/")}>
            <i className="lni-slim"></i>
            <div className="timeline__event__date">3</div>
          </div>
          <div className="timeline__event__content" onClick={()=>navigate("/laruta/siembra/")}>
            <div className="timeline__event__title" >Siembra</div>
            <div className="timeline__event__description">
              <p>
                El primera paso más importante en el establecimiento del
                cultivo, hacer una buena siembre nos implicará menos gastos en
                el futuro.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline__event animated fadeInUp timeline__event--type1">
          <div className="timeline__event__icon">
            <i className="lni-cake"></i>
            <div className="timeline__event__date">4</div>
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Mantenimiento</div>
            <div className="timeline__event__description">
              <p>
                Cada cierto tiempo se debe realizar unas actividades para que el
                cultivo siempre de el mejor rendimiento.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
          <div className="timeline__event__icon ">
            <i className="lni-cake"></i>
            <div className="timeline__event__date">1</div>
          </div>
          <div className="timeline__event__content ">
            <div className="timeline__event__title">El aguacate</div>
            <div className="timeline__event__description">
              <p>
                Todo lo que debes sobre esta maravillosa fruta que encanta a
                tantas personas en el mundo.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
          <div className="timeline__event__icon ">
            <i className="lni-cake"></i>
            <div className="timeline__event__date">1</div>
          </div>
          <div className="timeline__event__content ">
            <div className="timeline__event__title">El aguacate</div>
            <div className="timeline__event__description">
              <p>
                Todo lo que debes sobre esta maravillosa fruta que encanta a
                tantas personas en el mundo.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
          <div className="timeline__event__icon ">
            <i className="lni-cake"></i>
            <div className="timeline__event__date">1</div>
          </div>
          <div className="timeline__event__content ">
            <div className="timeline__event__title">El aguacate</div>
            <div className="timeline__event__description">
              <p>
                Todo lo que debes sobre esta maravillosa fruta que encanta a
                tantas personas en el mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RutaHass;
