"use client";
import { createTheme } from "@mui/material/styles";
import { Work_Sans, PT_Serif } from "next/font/google";

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: "400",
});

const pt_serif = PT_Serif({
  subsets: ["latin"],
  weight: "400",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#570013",
    },
    secondary: {
      main: "#7c7978",
    },
    info: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: work_sans.style.fontFamily,
    h5: {
      fontFamily: pt_serif.style.fontFamily
    },
  },
});

export default theme;
