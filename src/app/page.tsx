"use client";
import Image from "next/image";
import { useState } from "react";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { Grid, Stack } from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import ProjectCard from "@/components/ProjectCard";
import Pagination from "@mui/material/Pagination";
import { about, experiences, projects } from "@/data";

export default function Home() {
  const [pageSize] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const projectPage = Math.ceil(projects.length / pageSize);

  const pageOnClick = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
  };

  return (
    <>
      <Header />
      <main>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
            padding: { md: 15, xs: 5 },
          }}
        >
          <Toolbar />
          <Grid
            id="index"
            component="section"
            spacing={12}
            sx={{
              alignItems: "center",
              marginBottom: 15,
              paddingBottom: 15,
              borderBottom: "5px solid black",
            }}
            container
          >
            <Grid size={{ md: 8, xs: 6 }}>
              <Stack spacing={2}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "84px",
                    fontWeight: "bold",
                    color: "primary.main",
                    textTransform: "uppercase",
                  }}
                >
                  {about.name}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {about.headline}
                </Typography>
                <Typography sx={{ textAlign: "justify" }}>
                  {about.description}
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ md: 4, xs: 6 }}>
              <Image
                alt="profile-picture"
                src="/animation-pp.png"
                width={300}
                height={400}
                style={{
                  padding: 8,
                  filter: "saturate(0)",
                  border: "2px solid black",
                }}
              />
            </Grid>
          </Grid>
          <Box
            id="experiences"
            component="section"
            display="flex"
            flexDirection="column"
            gap={5}
            sx={{ mb: "15vmax" }}
          >
            <Typography sx={{ typography: { xs: "h5", md: "h3" } }}>
              Experiences
            </Typography>
            {experiences.map((item, index) => (
              <WorkCard
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
                tags={item.tags}
              />
            ))}
          </Box>
          <Box
            id="projects"
            component="section"
            display="flex"
            flexDirection="column"
            sx={{ mb: "5vmax" }}
            gap={2}
          >
            <Typography
              sx={{ typography: { xs: "h5", md: "h3" } }}
              gutterBottom
            >
              Projects
            </Typography>
            {projects
              .slice(pageSize * (pageNumber - 1), pageSize * pageNumber)
              .map((item, index) => (
                <ProjectCard
                  key={index}
                  name={item.name}
                  imgPath={item.imgPath}
                  description={item.description}
                  link={item.link}
                />
              ))}
            <Pagination
              count={projectPage}
              variant="outlined"
              sx={{ m: "auto" }}
              page={pageNumber}
              onChange={pageOnClick}
            />
          </Box>
        </Box>
      </main>
      <Box id="contacts" component="section" sx={{ pb: "5vmax" }}>
        <Footer />
      </Box>
    </>
  );
}
