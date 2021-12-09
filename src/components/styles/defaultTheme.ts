import { createTheme } from "./createTheme";

const defaultTheme = createTheme({
  breakpoints: {
    keys: ["s", "m", "l", "xl"],
    values: {
      s: 600,
      m: 1024,
      l: 1440,
      xl: 1920,
    },
  },
  spacing: 4,
});

export default defaultTheme;
