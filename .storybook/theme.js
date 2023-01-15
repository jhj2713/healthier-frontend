import { create } from "@storybook/theming/create";
import theme from "../src/lib/theme";
import logoLarge from "../public/logo-large.png";

export default create({
  base: "dark",
  colorPrimary: theme.color.blue,
  colorSecondary: theme.color.blue,

  // UI
  appBg: theme.color.grey_900,
  appContentBg: theme.color.grey_900,
  appBorderColor: theme.color.grey_500,
  appBorderRadius: 10,

  // Typography
  fontBase: "Spoqa Han Sans",

  // Text colors
  textColor: theme.color.grey_100,
  textInverseColor: theme.color.grey_500,

  // Toolbar default and active colors
  barTextColor: theme.color.grey_100,
  barSelectedColor: theme.color.blue,
  barBg: theme.color.grey_900,

  // Form colors
  inputBg: "transparent",
  inputBorder: theme.color.blue,
  inputTextColor: theme.color.grey_100,
  inputBorderRadius: 6,

  brandTitle: "Healthier",
  brandUrl: "https://healthier.cf",
  brandImage: logoLarge,
});
