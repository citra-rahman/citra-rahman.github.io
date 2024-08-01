"use client";
import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import { projectCardProp } from "@/libs/type";

export default function ProjectCard({ name, imgPath, description, link }: projectCardProp) {
    return (
        <Button href={link} style={{ display: "flex", flexDirection: "row", textTransform: 'capitalize' }} target='_blank'>
            <Image alt={name} src={imgPath} width={100} height={100}/>
            <Box sx={{paddingX: 5}}>
                <Typography>{name}</Typography>
                <Typography sx={{color: '#8496b1'}}>{description}</Typography>
            </Box>
        </Button>
    )
}