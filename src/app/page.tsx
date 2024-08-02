"use client";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Gruppo } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WorkCard from "./components/WorkCard";
import ProjectCard from "./components/ProjectCard";
import CssBaseline from '@mui/material/CssBaseline';
import { about, experiences, projects } from "@/data";

const gruppo = Gruppo({
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
      <Header />
      <main>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          padding: { md: '15vmax 25vmax', xs: '5vmax' }
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
              {about.name}</Typography>
            <Typography
              sx={{
                typography: { xs: 'h5', md: 'h3' },
                fontWeight: 'bold'
              }}
              gutterBottom>{about.headline}</Typography>
            <Typography component='div' sx={{ pb: 4, textAlign: 'justify' }}>
              {about.description}
            </Typography>
            <Button
              component="a"
              color='secondary'
              variant="outlined"
              target="_blank"
              href={about.resumeLink}
            >
              {about.resumeButtonName}
            </Button>
          </Box>
          <Box id="experiences" component="section" display='flex' flexDirection='column' gap={5} sx={{ mb: '15vmax' }}>
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
          <Box id="projects" component="section" display='flex' flexDirection='column' sx={{ mb: '5vmax' }} gap={2}>
            <Typography sx={{ typography: { xs: 'h5', md: 'h3' } }} gutterBottom>Projects</Typography>
            {
              projects.map((item, index) =>
                <ProjectCard
                  key={index}
                  name={item.name}
                  imgPath={item.imgPath}
                  description={item.description}
                  link={item.link}
                />
              )
            }
          </Box>
        </Box>
      </main>
      <Box id="contacts" component="section" sx={{ pb: '5vmax' }}>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}