"use client";
import Image from "next/image";
import { useState } from "react";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { Grid, Stack } from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Framework from "@/components/Framework";
import ProjectCard from "@/components/ProjectCard";
import Pagination from "@mui/material/Pagination";
import ExperienceCard from "@/components/ExperienceCard";
import {
  about,
  experiences,
  projects,
  programmingLanguages,
  framework,
} from "@/data";

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
            backgroundColor: "#fdf9f8",
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
              marginBottom: 5,
              paddingBottom: 10,
              borderBottom: "5px solid black",
            }}
            container
          >
            <Grid size={{ md: 8, xs: 12 }}>
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
            <Grid
              size={{ md: 4, xs: 12 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
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
          <Grid
            id="journal"
            component="section"
            spacing={12}
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              alignItems: "start",
              marginBottom: 15,
              paddingBottom: 15,
              borderBottom: "5px solid black",
            }}
            container
          >
            <Grid id="professional_journey" size={{ md: 7, xs: 12 }}>
              <Grid
                id="title"
                sx={{
                  display: "flex",
                  direction: "row",
                  paddingY: 7,
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                }}
              >
                <Typography
                  color="primary"
                  sx={{
                    fontSize: "11px",
                    fontWeight: 900,
                  }}
                >
                  02. CHRONOLOGY
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "46px", fontWeight: "bold" }}
                >
                  Professional Journey
                </Typography>
              </Grid>
              <Stack>
                {experiences.map((item, index) => (
                  <ExperienceCard
                    key={index}
                    date={item.date}
                    title={item.title}
                    company={item.company}
                    description={item.description}
                  />
                ))}
              </Stack>
            </Grid>
            <Grid id="technical_foundation" size={{ md: 5, xs: 12 }}>
              <Typography
                color="primary"
                sx={{
                  fontSize: "11px",
                  fontWeight: 900,
                }}
              >
                03. ARCHITECTURE
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: "46px", fontWeight: "bold", marginBottom: 5 }}
              >
                Technical Foundations
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                sx={{ mb: 2, fontWeight: "bold" }}
                gutterBottom
              >
                CORE LANGUAGES
              </Typography>
              <Grid
                id="programming_languages"
                spacing={2}
                sx={{ mb: 5 }}
                container
              >
                {programmingLanguages.map((item, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    color="secondary"
                    sx={{ fontSize: "12px" }}
                  >
                    {item}
                  </Button>
                ))}
              </Grid>
              <Typography variant="h6" color="secondary" gutterBottom>
                FRAMEWORKS &amp; RUNTIMES
              </Typography>
              {framework.map((item) => (
                <Framework key={item} item={item} />
              ))}
            </Grid>
          </Grid>
          <Box id="projects">
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
