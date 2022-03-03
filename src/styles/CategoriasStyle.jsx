import styled from 'styled-components';

export const TarjetaWrap = styled.div `
    margin: 20px ;
    cursor: pointer;

    & .tarjeta {
        position: relative;
        width: 400px;
        height: 350px;

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