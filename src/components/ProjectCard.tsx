"use client";
import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import { projectProp } from "@/libs/type";

export default function ProjectCard({ id, name, imgPath, description, link }: projectProp) {
    return (
        <Button
            id={`button-${id}`}
            href={link}
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                textTransform: 'capitalize'
            }} target='_blank'>
            <Image
                alt={name}
                src={imgPath}
                width={100}
                height={100}
                style={{
                    objectFit: "contain"
                }}
            />
            <Box
                sx={{
                    pl: 3
                }}>
                <Typography>{name}</Typography>
                <Typography
                    sx={{
                        color: "#8496b1"
                    }}
                >{description}</Typography>
            </Box>
        </Button>
    )
}