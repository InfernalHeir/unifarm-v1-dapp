import { createMuiTheme } from "@material-ui/core/styles";

const muiTheme = createMuiTheme({
  overrides: {
    MuiDialog: {
      paperWidthSm: {
        borderRadius: 20,
        padding: 16
      }
    }
  }
});

export default muiTheme;
