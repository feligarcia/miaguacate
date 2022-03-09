import React from 'react'
import styled from 'styled-components'
import { noticias } from '../../data/dbNoticias'
import { useNavigate } from 'react-router-dom';


const Noticia3 = () => {
  const navigate = useNavigate();

  const Body = styled.div `
      background: rgba(163, 230, 137, 50);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

    & .main {
      background: white;
      margin: 50px 0;
      display: flex;
      position: relative;
      justify-content: center;

        & header {
        width: 90px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 5px;
        left: 0px;
        color: rgba(0, 189, 93, 1);
        cursor: pointer;

        & :hover {
          color: rgba(0, 129, 93, 1);
        }

        & h2 {
          display: flex;
          align-items: center;
          font-size: 16px;
        }
      }

      & div {
        display: flex;
        width: 1150px;
        flex-direction: column;
        justify-content: center;


          & h1{
            text-align: center;
            margin: 40px;
            margin-top: 100px;
          }

          & div{
            width: 1000px;
            margin: auto;
            

            & img {
              width: 850px;
              margin: 40px auto;
            }

            & p {
              font-size: 22px;
              margin-bottom: 50px;
            }
          }
      }
      
    }
    
  `

  return (
    <Body>

      <div className="main">
        <header>
          <h2 onClick={() => navigate("/noticias")}> 
            <svg width="35" height="35" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            <span>Volver</span>

          </h2>
        </header>

        <div>
          <h1> {noticias[2].titulo} </h1>
          
            <div>
              <img src={noticias[2].img} alt="img noticia" />
              <p> {noticias[2].noticia} </p>
            </div>
            
        </div>
      </div>

    </Body>
  )
}

export default Noticia3