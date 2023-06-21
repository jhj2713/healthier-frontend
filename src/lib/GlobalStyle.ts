import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        font-family: "Spoqa Han Sans";
        font-display: swap;
        letter-spacing: -0.03rem;
    }
    body {
        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;

        background: #131416;

        word-break: keep-all;
    }
    p, h1, h2, h3, h4, h5{
        margin: 0;
        padding: 0;
    }
    input{
        font-family: "Spoqa Han Sans";
        border: none;
        outline: none;
        background: transparent;

        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
    ul{
        margin-block-start: 0;
        margin-inline-start: 0;
        padding-inline-start: 0;
    }
    li{
        list-style: none;
    }
    button{
        font-family: "Spoqa Han Sans";
    }
`;

export default GlobalStyle;
