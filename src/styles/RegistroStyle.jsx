import styled from 'styled-components';

export const Body = styled.div `
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;

    & h1 {
        @import url('https://fonts.googleapis.com/css2?family=Chewy&display=swap');
        font-family: 'Chewy', cursive;
        font-weight: 800;
        color: #00BD5D;
        font-size: 30px;
        margin-bottom: 50px;
        z-index: 2;
    }

    & h3 {
        @import url('https://fonts.googleapis.com/css2?family=Chewy&family=Lato:wght@300&display=swap');
        font-family: 'Lato', sans-serif;
        color: #7B421B;
        z-index: 2;
    }

    & input {
        width: 350px;
        height: 45px;
        margin: 15px;
        z-index: 2;
    }

    & .label-file {
        position: relative;
        width: 350px;
        height: 45px;
        margin: 0 15px;
        color: #0c0c0c94;
        border: 1px solid #0c0c0c44;
        border-radius: 3px;
        display:flex;
        align-items: center;
        padding: 15px;
        z-index: 2;
        cursor: pointer;
    }

    & #inputImage{
        opacity: 0;
        padding:0;
        position: absolute;
        top: 500px;
        z-index: 0;
    }

    & button {
        @import url('https://fonts.googleapis.com/css2?family=Chewy&family=Lato:wght@300&display=swap');
        font-family: 'Lato', sans-serif;
        width: 350px;
        height: 45px;
        background: rgba(217, 234, 123, 100);
        color: black;
        border: none;
        border-radius: 5px;
        margin: 0 15px;
        z-index: 2;

        &:hover {
            background: rgba(180, 234, 123, 100);
        }
    }

    & .handleSocial{
        width: 150px;
        display: flex;
        justify-content: center;
        margin: auto;
        margin-bottom: 10px;
        cursor: pointer;
    }

    & h6 {
        text-align:center;
        cursor: pointer;
        z-index: 2;

        & span {
            color: #00BD5D;
        }
    }
`
