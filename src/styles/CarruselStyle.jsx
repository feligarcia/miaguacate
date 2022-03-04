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
    }
    & li img {
        width: 850px;
        height: 350px;
        margin: 16px;
        object-fit: cover;
        object-position: top;
    }
    @keyframes cambio {
        0% {margin-left: 5%;}
        20% {margin-left: 5%;}
        25% {margin-left: -65%;}
        45% {margin-left: -65%;}
        50% {margin-left: -140%;}
        70% {margin-left: -140%;}
        75% {margin-left: -220%;}
        100% {margin-left: -220%;}
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
