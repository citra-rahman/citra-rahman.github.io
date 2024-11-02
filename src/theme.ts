"use client";
import { createTheme } from "@mui/material/styles";
import { Gruppo } from "next/font/google";

const gruppo = Gruppo({
    subsets: ["latin"],
    weight: "400",
  });
  
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#45afa0",
    },
  },
  typography: {
    allVariants: {
      fontFamily: gruppo.style.fontFamily,
    },
  },
});

export default darkTheme;
