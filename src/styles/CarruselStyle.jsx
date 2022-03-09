import styled from 'styled-components';

export const ContainerSlider = styled.header `
    width: 100%;
    margin: auto;
    overflow: hidden;
`

export const ListaSlider = styled.ul `
    display: flex;
    animation: cambio 30s infinite;
    animation-direction: alternate;
    & li {
        width: 100%;
        list-style: none;
        position: relative;
        cursor: pointer;
    }
    & li img {
        width: 850px;
        height: 350px;
        margin: 16px;
        object-fit: cover;
        object-position: top;
        position: relative ;
    }

    & li div {
        background: #0e0d0db1;
        color: white;
        text-align: center;
        width: 850px;
        height: 80px;
        position: absolute ;
        bottom:15px;
        left: 15px;

        & h4 {
            width: 840px;
            height: 80px;
            display: flex;
            align-items: center;
        }
    }
    @keyframes cambio {
        0% {margin-left: 1%;}
        20% {margin-left: -10%;}
        25% {margin-left: -30%;}
        45% {margin-left: -30%;}
        50% {margin-left: -80%;}
        70% {margin-left: -80%;}
        75% {margin-left: -180%;}
        100% {margin-left: -180%;}
    } 
`

export const MenuSlider = styled.ul `
    list-style: none;
    text-align: center;
    
    & li {
        display: inline-block;
        text-align: center;
    }
    & li a {
        display: inline-block;
        background: #A7A9BE;
        border-radius: 100%;
        font-size: 4px;
        color: transparent;
        margin: 16px;
        width: 12px;
        height: 12px;
    }
`
