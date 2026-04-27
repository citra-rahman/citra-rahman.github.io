"use client";
import { Grid, Typography } from "@mui/material";
import { frameworkProp } from "@/libs/type";
import TerminalIcon from "@mui/icons-material/Terminal";

export default function Framework({ item }: frameworkProp) {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        paddingY: 1,
        borderBottom: "1px solid #f0f0f0",
        justifyContent: "space-between",
      }}
    >
      <Typography gutterBottom>{item}</Typography>
      <TerminalIcon color="primary" />
    </Grid>
  );
}
