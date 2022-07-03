import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --vh: 100%;
    }
    html {
        font-size: 62.5%;
        font-family: "Spoqa Han Sans";
        letter-spacing: -0.03rem;
    }
    body {
        margin: 0;
        padding: 0;

        background-color: #131416;

        word-break: keep-all;
    }
`;

export default GlobalStyle;
