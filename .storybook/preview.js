import { ThemeProvider } from "styled-components";
import theme from "../src/lib/theme";
import GlobalStyle from "../src/lib/GlobalStyle";
import StorybookTheme from "./theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: StorybookTheme,
  },
};

export const decorator = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
