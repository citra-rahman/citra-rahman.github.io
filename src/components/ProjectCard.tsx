"use client";
import Image from "next/image";
import { Typography, Button, Box } from "@mui/material";
import { projectCardProp } from "@/libs/type";

export default function ProjectCard({
  id,
  name,
  imgPath,
  description,
  link,
}: projectCardProp) {
  const mdBtnSize = (key: number) => (key === 1 || key === 4 ? 800 : 400);

  return (
    <Button
      href={link}
      target="_blank"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        border: "1px solid black",
        width: { md: mdBtnSize(id), xs: 400 },
        "&:hover": {
          transform: "scale(1.1)",
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
        }}
      >
        {name}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </Button>
  );
}
