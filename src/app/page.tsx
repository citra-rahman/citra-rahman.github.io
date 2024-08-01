"use client";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Gruppo } from "next/font/google";
import Header from "./components/Header";
import WorkCard from "./components/WorkCard";
import CssBaseline from '@mui/material/CssBaseline';
import { experiences } from "@/data";

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
          flexDirection: 'column',
          alignItems: 'start',
          padding: { md: '15vmax 25vmax', xs: '20vmax' }
        }}>
          <Toolbar />
          <Box id="about" component="section" sx={{ mb: '15vmax' }}>
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
            <Typography component='div' sx={{ pb: 4, textAlign: 'justify' }}>
              I am a software engineer specializing in building web application. Currently, I am living in Istanbul, Turkey. I am focusing on building applications with Ruby On Rails and or React JS.
            </Typography>
            <Button color='secondary' variant="outlined">Check out my Resume</Button>
          </Box>
          <Box id="experiences" component="section" display='flex' flexDirection='column' gap={5}>
            <Typography sx={{ typography: { xs: 'h5', md: 'h3' } }}>Experiences</Typography>
            {
              experiences.map((item, index) =>
                <WorkCard
                  key={index}
                  date={item.date}
                  title={item.title}
                  description={item.description}
                  tags={item.tags}
                />
              )
            }
          </Box>
        </Box>
      </main>
    </ThemeProvider>
  )
}