"use client";
import { Grid, Typography } from "@mui/material";
import { workCardProp } from "@/libs/type";

export default function ExperienceCard({
  date,
  title,
  company,
  description,
}: workCardProp) {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        paddingY: 5,
        alignItems: "start",
        justifyContent: "space-between",
        borderBottom: "1px solid black",
        "&:hover": {
          backgroundColor: "#f5f5f4",
          transition: "background-color 0.3s ease, color 0.3s ease"
        },
      }}
      container
    >
      <Grid size={4}>
        <Typography variant="body2" color="secondary">{date}</Typography>
      </Grid>
      <Grid size={8} sx={{ minWidth: 120 }}>
        <Typography variant="h5" sx={{fontSize: "24px"}} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="primary" gutterBottom>
          {company}
        </Typography>
        <Typography gutterBottom>{description[0]}</Typography>
      </Grid>
    </Grid>
  );
}
