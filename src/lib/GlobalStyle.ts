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
`;

export default GlobalStyle;
