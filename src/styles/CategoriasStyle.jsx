import styled from 'styled-components';

export const Div = styled.div `
    & .line-tarjeta {
        display: flex; 
        justify-content: center;
        text-align: center;
    }
`

export const TarjetaWrap = styled.div `
    margin: 5px;
    cursor: pointer;

    & .tarjeta {
        position: relative;
        width: 280px;
        height: 150px;
        overflow: hidden;

        & .adelante, .info {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            backface-visibility: hidden;
            transition: 1s
        }

        & .adelante {
            transform: perspective(500px) rotateY(0deg);
        }

        & .info {
            transform: perspective(500px) rotateY(180deg);
        }
    }

    & .tarjeta:hover .adelante {
        transform: perspective(500px) rotateY(180deg);
    }

    & .tarjeta:hover .info {
        transform: perspective(500px) rotateY(360deg);
    }
`