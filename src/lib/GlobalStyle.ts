import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        font-family: "Spoqa Han Sans";
        letter-spacing: -0.03rem;
    }
    body {
        height: 100vh;
        margin: 0;
        padding: 0;

        background-color: #131416;
    }
`;

export default GlobalStyle;
