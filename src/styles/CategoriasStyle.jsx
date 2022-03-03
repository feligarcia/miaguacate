import styled from 'styled-components';

export const TarjetaWrap = styled.div `
    margin: 20px;
    cursor: pointer;

    & .tarjeta {
        position: relative;
        width: 400px;
        height: 450px;

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

// export const TarjetaWrap = styled.div `
//     margin: 20px;
//     -webkit-perspective: 700;
//     perspective: 700;
//     cursor: pointer;

//     & :hover {
//         transform: rotateY(180deg);

//         & .tarjeta :hover{
//             transform: rotateY(180deg);
//         }
//     }

//     & .tarjeta {
//         width: 400px;
//         height: 450px;
//         position: relative;
//         transform-style: preserve-3d;
//         transition: .10s ease;

//         & .adelante, .info {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             padding: 20px;
//             width: 100%;
//             height: 100%;
//             position: absolute;
//             top: 0;
//             left:0;
//             -webkit-backface-visibility: hidden;
//             backface-visibility: hidden;
            
//         }

//         & .info {
//             transform: rotateY(180deg);
//             transform-style: preserve-3d;
//         }
//     }

// `