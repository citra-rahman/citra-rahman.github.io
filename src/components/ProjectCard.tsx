"use client";
import Image from "next/image";
import { Typography, Button, Box } from "@mui/material";
import { projectCardProp } from "@/libs/type";

export default function ProjectCard({
  name,
  imgPath,
  description,
  link,
}: projectCardProp) {
  return (
    <Button
      href={link}
      target="_blank"
      sx={{
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        borderRadius: 0,
        border: "1px solid black",
        "&:hover": {
          transform: "scale(1.1)",
        },
        width: {
          md: "100%",
          xs: {xs: 300, sm: 400, md: 600},
        },
      }}
    >
      <Image
        alt={name}
        src={imgPath}
        width={0}
        height={0}
        style={{ width: "100%", height: 400 }}
      />
      <Typography
        variant="h5"
        sx={{
          color: "#000",
          textTransform: "capitalize",
          fontWeight: "bold",
          paddingX: 1,
        }}
        gutterBottom
      >
        {name}
      </Typography>
      <Typography variant="body2" sx={{ paddingX: 1 }}>
        {description}
      </Typography>
    </Button>
  );
}
