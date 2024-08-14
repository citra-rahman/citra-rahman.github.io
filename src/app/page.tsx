"use client";
import { useState, useEffect } from "react";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Gruppo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import ProjectCard from "@/components/ProjectCard";
import CssBaseline from '@mui/material/CssBaseline';
import Pagination from '@mui/material/Pagination';
import { getExperiences, getProjects } from "@/libs/api";
import { about } from "@/data";
import { projectProp, workProp } from "@/libs/type";

const gruppo = Gruppo({
  subsets: ["latin"],
  weight: '400'
});

export default function Home() {
  const [pageSize] = useState(5);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [projectPage, setProjectPage] = useState(1);

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

  const pageOnClick = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
  }

  useEffect(() => {
    getExperiences().then(res => setExperiences(res));
  }, []);

  useEffect(() => {
    getProjects().then(res => {
      setProjects(res);
      setProjectPage(Math.ceil(projects.length / pageSize));
    });
  }, [pageSize, projects.length]);

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
              experiences && experiences.map((item: workProp, index) =>
                <WorkCard
                  key={index}
                  {...item}
                />
              )
            }
          </Box>
          <Box id="projects" component="section" display='flex' flexDirection='column' sx={{ mb: '5vmax' }} gap={2}>
            <Typography sx={{ typography: { xs: 'h5', md: 'h3' } }} gutterBottom>Projects</Typography>
            {
              projects && projects
                .slice(pageSize * (pageNumber - 1), pageSize * pageNumber)
                .map((item: projectProp, index) =>
                  <ProjectCard
                    key={index}
                    {...item}
                  />
                )
            }
            <Pagination count={projectPage} variant="outlined" sx={{ m: "auto" }} page={pageNumber} onChange={pageOnClick} />
          </Box>
        </Box>
      </main>
      <Box id="contacts" component="section" sx={{ pb: '5vmax' }}>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}