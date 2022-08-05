import { createTheme } from "@mui/material/styles";

/**
 * Main website Theme
 */
export const theme = createTheme({
  palette: {
    // type: "light",
    primary: {
      main: "#79a1f2",
    },
    secondary: {
      main: "#17bbc1",
    },
    background: {
      default: "#faf1ff",
      paper: "#ede7fd",
    },
    error: {
      main: "#f12d6d",
    },
    warning: {
      main: "#de5bac",
    },
    success: {
      main: "#6be270",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "Catamaran",
    fontWeightRegular: 300,
    fontWeightMedium: 600,
    fontWeightBold: 900,
    // h1: {
    //   fontSize: "5rem",
    // },
    // h2: {
    //   fontSize: "3.3rem",
    // },
    // h3: {
    //   fontSize: "3rem",
    // },
  },
  shape: {
    borderRadius: 4,
  },
  //   props: {
  //     MuiTooltip: {
  //       arrow: true,
  //     },
  //   },
});
