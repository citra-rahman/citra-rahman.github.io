"use client";
import Image from "next/image";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { Grid, Stack } from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Framework from "@/components/Framework";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import {
  about,
  experiences,
  project_simulations,
  programmingLanguages,
  framework,
} from "@/data";

const titleStyle = {
  fontSize: "12px",
  fontWeight: 900,
};

export default function Home() {
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
            borderBottom: "5px solid #800020",
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
              borderBottom: "2px solid black",
            }}
            container
          >
            <Grid size={{ md: 8, xs: 12 }}>
              <Stack spacing={2}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { md: "84px", xs: "48px" },
                    fontWeight: "bold",
                    color: "primary.main",
                    textTransform: "uppercase",
                  }}
                >
                  {about.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { md: "42px", xs: "28px" },
                    fontWeight: "bold",
                  }}
                >
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
          <Grid id="selected works">
            <Grid
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: { md: 4, xs: 2 },
              }}
            >
              <Typography color="primary" sx={titleStyle} gutterBottom>
                01. CURATED OUTPUT
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { md: "45px", xs: "23px" },
                  fontWeight: "bold",
                }}
                gutterBottom
              >
                Selected Artifacts
              </Typography>
            </Grid>
            <Grid
              size={6}
              spacing={6}
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: { md: 10, xs: 5 },
                paddingBottom: { md: 10, xs: 5 },
                justifyContent: "center",
                borderBottom: "2px solid black",
              }}
              container
            >
              {project_simulations.map((item, index) => (
                <ProjectCard
                  key={index}
                  id={item.id}
                  name={item.name}
                  imgPath={item.imgPath}
                  description={item.description}
                  link={item.link}
                />
              ))}
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
              marginBottom: { md: 15, xs: 7 },
              paddingBottom: { md: 15, xs: 7 },
              borderBottom: "2px solid black",
            }}
            container
          >
            <Grid id="professional_journey" size={{ md: 7, xs: 12 }}>
              <Grid
                id="title"
                spacing={4}
                sx={{
                  display: "flex",
                  direction: "row",
                  paddingY: { md: 7, xs: 2 },
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                }}
              >
                <Typography color="primary" sx={titleStyle} gutterBottom>
                  02. CHRONOLOGY
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { md: "46px", xs: "23px" },
                    fontWeight: "bold",
                  }}
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
              <Typography color="primary" sx={titleStyle} gutterBottom>
                03. ARCHITECTURE
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { md: "46px", xs: "28px" },
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
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
              <Box
                id="quotes"
                sx={{
                  color: "#fff",
                  padding: 5,
                  backgroundColor: "primary.main",
                }}
              >
                <Typography gutterBottom>
                  &quot;Engineering is the bridge between human problems and
                  digital permanence.&quot;
                </Typography>
                <Typography>— C. PUSPITA RAHMAN</Typography>
              </Box>
            </Grid>
          </Grid>
          <Stack
            id="hero"
            component="section"
            sx={{
              padding: { md: 10, xs: 5 },
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { md: "5rem", xs: "1.5rem" },
                fontWeight: "bold",
              }}
              gutterBottom
            >
              READY TO BUILD
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { md: "2.5rem", xs: "1rem" },
                color: "primary.main",
              }}
              gutterBottom
            >
              YOUR OWN E-COMMERCE?
            </Typography>
            <Button
              variant="contained"
              href="https://wa.me/6281270551911"
              color="primary"
              target="_blank"
              sx={{
                padding: 2,
                borderRadius: 0,
              }}
            >
              INITIATE PROJECT
            </Button>
          </Stack>
        </Box>
      </main>
      <Footer />
    </>
  );
}
