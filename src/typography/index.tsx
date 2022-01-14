import { createTheme } from "@mui/material/styles";

const typographyAtomStyles = createTheme({
  typography: {
    h1: {
      fontFamily: "Cera Pro",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "36px",
      lineHeight: "45.25px",
      display: "inline",
    },
    caption: {
      fontFamily: "Cera Pro",
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "14px",
      lineHeight: "17.6px",
    },

    body1: {
      fontFamily: "Cera Pro",
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "20.11px",
      display: "inline",
      width: "100px",

      //   display: "inline",
      //   width: "78px",
      //   height: "20px",
      //   fontStyle: "normal",
      //   fontWeight: 500,
      //   fontSize: "16px",
      //   lineHeight: "20px",
      //   color: "#03314B",
    },
    subtitle1: {
      fontFamily: "Cera Pro",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "18px",
      verticalAlign: "top",
      textAlign: "left",
      display: "inline",
      width: "96px",
      //   height: "18px",

      lineHeight: "22.63px",
      color: "#22C870",
    },
  },
});

export { typographyAtomStyles };
