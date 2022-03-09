import React from 'react'
import NavIni from "../components/NavIni";
import NavUser from "../components/NavUser";
import { noticias } from '../data/dbNoticias'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'


const Noticias = () => {

  const navigate = useNavigate();

  const H1 = styled.h1 `
    display: flex;
    justify-content: center;
    margin: 30px;
  `

  const Div = styled.ul `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & li {
      display: flex;
      justify-content: center;
      margin: 20px 0;
      width: 100%;
      

      & div {
        background: #0e0d0d15;
        display: flex;
        width: 1150px;
        cursor: pointer;

        & img {
          width: 300px;
          margin: 15px 50px;
  
        }
      }

      & div:hover {
          box-shadow: 15px 15px 20px #0e0d0d80;
        }

    }
  `
console.log(noticias)

  return (
    <div>
      <NavUser />
      <NavIni />
      
      <H1>Ultimas noticias</H1>

      <Div>
           <li onClick={() => navigate("/noticias/noticia1")}>
             <div>
                <img src={noticias[0].img} alt="img noticia" />
                <h4>{noticias[0].titulo}</h4>
             </div>
          </li>

          <li onClick={() => navigate("/noticias/noticia2")}>
            <div>
              <img src={noticias[1].img} alt="img noticia" />
              <h4>{noticias[1].titulo}</h4> 
            </div>
          </li>

          <li onClick={() => navigate("/noticias/noticia3")}>
            <div>
              <img src={noticias[2].img} alt="img noticia" />
              <h4>{noticias[2].titulo}</h4>
            </div>
          </li>

          <li onClick={() => navigate("/noticias/noticia4")}>
            <div>
              <img src={noticias[3].img} alt="img noticia" />
              <h4>{noticias[3].titulo}</h4>
            </div>
          </li>
        </Div>
      
    </div>
  )
}

export default Noticias