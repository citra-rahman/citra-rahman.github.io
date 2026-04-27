"use client";
import Image from "next/image";
import { Typography, Button } from "@mui/material";
import { projectCardProp } from "@/libs/type";

export default function ProjectCard({
  id,
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
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        border: "1px solid black",
        "&:hover": {
          transform: "scale(1.1)"
        },
      }}
    >
      <Image
        alt={name}
        src={imgPath}
        width={id === 1 || id === 4 ? 700 : 400}
        height={500}
      />
      <Typography
        variant="h5"
        sx={{
          color: "#000",
          textTransform: "capitalize",
          fontWeight: "bold",
        }}
      >
        {name}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </Button>
  );
}
