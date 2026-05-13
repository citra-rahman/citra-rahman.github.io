"use client";
import Image from "next/image";
import { Typography, Button, Box } from "@mui/material";
import { projectCardProp } from "@/libs/type";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
          xs: { xs: 300, sm: 400, md: 600 },
        },
      }}
    >
      <Image
        alt={name}
        src={imgPath}
        width={0}
        height={0}
        style={{ width: "100%", height: 600 }}
        objectFit="contain"
        loading="lazy"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#000",
            textTransform: "capitalize",
            fontWeight: "bold",
            lineHeight: 1,
          }}
          gutterBottom
        >
          {name}
        </Typography>
        <ArrowForwardIcon
          fontSize="large"
          sx={{
            "&:hover": {
              transform: "translateX(0.5rem)",
            },
          }}
        />
      </Box>
      <Typography variant="body2" sx={{ padding: 1 }}>
        {description}
      </Typography>
    </Button>
  );
}
