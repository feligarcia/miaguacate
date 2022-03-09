import React from 'react'
import styled from 'styled-components'
import { noticias } from '../../data/dbNoticias'
import { useNavigate } from 'react-router-dom';


const Noticia4 = () => {
  const navigate = useNavigate();

  const Body = styled.div `

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

    & header {
      width: 90px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 15px;
      left: 300px;
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


    & main {
      display: flex;
      justify-content: center;

      
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
            }
          }
      }
      
    }
    
  `

  return (
    <Body>
      
      <header>
        <h2 onClick={() => navigate("/noticias")}> 
          <svg width="35" height="35" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
          <span>Volver</span>

        </h2>
      </header>

      <main>
        <div>
          <h1> {noticias[3].titulo} </h1>
          
            <div>
              <img src={noticias[3].img} alt="img noticia" />
              <p> {noticias[3].noticia} </p>
            </div>
            
        </div>
      </main>

    </Body>
  )
}

export default Noticia4