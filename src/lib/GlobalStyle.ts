import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Spoqa Han Sans";
        font-weight: bolder;
        src: url('fonts/SpoqaHanSansNeo-Medium.eot'); 
        src: url('fonts/SpoqaHanSansNeo-Medium.eot?#iefix') format('embedded-opentype'), 
            url('fonts/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
            url('fonts/SpoqaHanSansNeo-Medium.woff') format('woff'),
            url('fonts/SpoqaHanSansNeo-Medium.ttf') format('truetype');
    }
    @font-face {
        font-family: "Spoqa Han Sans";
        font-weight: lighter;
        src: url('fonts/SpoqaHanSansNeo-Regular.eot'); 
        src: url('fonts/SpoqaHanSansNeo-Regular.eot?#iefix') format('embedded-opentype'), 
            url('fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
            url('fonts/SpoqaHanSansNeo-Regular.woff') format('woff'),
            url('fonts/SpoqaHanSansNeo-Regular.ttf') format('truetype');
    }
    html {
        font-size: 62.5%;
        font-family: "Spoqa Han Sans";
    }
    body {
        height: 100vh;
        margin: 0;
        padding: 0;
        background-color: #131416;
    }
`;

export default GlobalStyle;
