import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./lib/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./lib/theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
