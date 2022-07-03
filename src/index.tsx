import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./lib/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./lib/theme";
import { BrowserRouter } from "react-router-dom";
import { store } from "./state/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
