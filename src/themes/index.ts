import { createTheme } from "@mui/material/styles";
import palette from "./palette";

const theme = createTheme({
  palette: {
    primary: {
      main: palette.primary,
    },
    secondary: {
      main: palette.secondary,
    },
    background: {
      default: palette.background,
    },
  },
});

export default theme;