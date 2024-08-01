"use client";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { Gruppo } from "next/font/google";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const gruppo = Gruppo({
  subsets: ["latin"],
  weight: '400'
});
export default function Home() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#45afa0',
      }
    },
    typography: {
      allVariants: {
        fontFamily: gruppo.style.fontFamily,
      },
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <Header />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '15vmax'
        }}>
          <Toolbar />
          <div>
            <Typography variant="h6" sx={{ color: '#45afa0' }} gutterBottom>Hi, my name is </Typography>
            <Typography sx={{
              fontWeight: 'bold',
              typography: { xs: 'h5', md: 'h3' }
            }}
            gutterBottom
            >
              Citra Puspita Rahman.</Typography>
            <Typography
              sx={{
                typography: { xs: 'h5', md: 'h3' },
                fontWeight: 'bold'
              }}
              gutterBottom>I build things for the web.</Typography>
            <Typography component='div' sx={{ maxWidth: '50vmax', pb: 4 }}>
              I am a software engineer specializing in building web application. Currently, I am living in Istanbul, Turkey. I am focusing on building applications with Ruby On Rails and or React JS.
            </Typography>
            <Button color='secondary' variant="outlined">Check out my Resume</Button>
          </div>
        </Box>
      </main>
    </ThemeProvider>
  )
}