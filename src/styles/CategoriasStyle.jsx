import styled from 'styled-components';

export const TarjetaWrap = styled.div `
    margin: 50px;
    -webkit-perspective: 700;
    perspective: 700;

    & :hover {
        transform: rotateY(180deg);
        transform-style: preserve-3d;
        & .tarjeta :hover{
            transform: rotateY(180deg);
        }
    }

    & .tarjeta {
        width: 300px;
        height: 350px;
        background: orange;
        position: relative;
        transform-style: preserve-3d;
        transition: .10s ease;

        & .adelante, .info {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left:0;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }

        & .info {
            transform: rotateY(180deg);
        }
    }

`

// export const Tarjeta = styled.div `
//     width: 300px;
//     height: 350px;
//     background: orange;
//     position: relative;

//     & .adelante, .info {
//         width: 100%;
//         height: 100%;
//         position: absolute;
//         top: 0;
//         left:0;
//         -webkit-backface-visibility: hidden;
//         backface-visibility: hidden;
//     }

//     & .info {
//         transform: rotateY(180deg);
//     }
// `