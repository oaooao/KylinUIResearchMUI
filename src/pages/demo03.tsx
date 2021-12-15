import {
  Button,
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "../components/index";
import styled from "../components/styles/styled";
import { Demo01 } from "./demo01";
import './demo03.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#5E4E9E",
      light: "#F5EDF5",
      dark: "#524398",
    },
  },
});

const CustomButton = styled(Button)(({ theme }) => {
  return {
    backgroundColor: theme.palette.warning.main,
  };
});

export const Demo03 = () => {
  return (
    <StyledEngineProvider injectFirst>
      <br />
      <br />

      <Button>Hello</Button>

      <br />
      <br />

      {/* 嵌套主题 */}
      <ThemeProvider theme={theme}>
        <Button>Hello</Button>
      </ThemeProvider>

      <br />
      <br />

      {/* sx 属性  */}
      <Button
        sx={{
          // backgroundColor: "#635323",
          bgcolor: "error.main",
          width: {
            s: 100, // theme.breakpoints.up('x')
            m: 300, // theme.breakpoints.up('m')
            l: 500, // theme.breakpoints.up('l')
            xl: 700, // theme.breakpoints.up('xl')
          },
        }}
      >
        Hello
      </Button>

      <Button
        className='x'
      // sx={{
      //   // backgroundColor: "#635323",
      //   bgcolor: "error.main",
      //   width: {
      //     s: 100, // theme.breakpoints.up('x')
      //     m: 300, // theme.breakpoints.up('m')
      //     l: 500, // theme.breakpoints.up('l')
      //     xl: 700, // theme.breakpoints.up('xl')
      //   },
      // }}
      >
        Hello
      </Button>

      <br />
      <br />

      {/*  styled 写法  */}
      <CustomButton>Hello</CustomButton>
    </StyledEngineProvider>
  );
};
