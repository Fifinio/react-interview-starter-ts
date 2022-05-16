import { createTheme } from "@mui/material";

const AppTheme = createTheme({
  palette: {
    primary: {
      main: "#4460F7",
    },
    secondary: {
      main: "#2140E8",
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
  },
  components: {
    // Name of the component ⚛️
    MuiCard: {
      styleOverrides: {
        root: {
          minWidth: 288,
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          overflow: "hidden",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          border: "none",
          outline: "1px solid #E0E2EA",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});
export default AppTheme;
