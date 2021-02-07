import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

const theme: ThemeOptions = createMuiTheme({
  palette: {
    primary: {
      main: "#222",
      dark: "#fff",
    },
  },
  shape: {
    borderRadius: 12,
  },
  overrides: {
    MuiButton: {
      contained: {
        color: "#fff",
        background: "linear-gradient(117deg, #e80163 19%, #2155e9)",
      },
    },
  },
});

export default theme;
