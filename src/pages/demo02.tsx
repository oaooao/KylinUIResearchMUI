import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "../components/index";
import { Demo01 } from "./demo01";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5E4E9E",
      light: "#F5EDF5",
      dark: "#524398",
    },
  },
});

export const Demo02 = () => {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <Demo01 />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
