import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  const linkStyle = {
    color: "grey",
    fontSize: "11px",
    textDecoration: "none",
  };
  return (
    <Stack
      direction="row"
      spacing={8}
      sx={{
        padding: 12,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ fontSize: "21px", fontStyle: "italic" }}>ARCHIVAL PERSISTENCE</Typography>
      <Typography sx={{ fontSize: "11px", maxWidth: 250 }}>
        © 2024 ARCHIVAL PERSISTENCE. BUILT FOR THE DISCERNING WEB.
      </Typography>
      <Stack direction="row" spacing={2}>
        <Link
          href="https://github.com/citra-rahman"
          target="_blank"
          style={linkStyle}
        >
          GITHUB
        </Link>
        <Link
          href="https://www.linkedin.com/in/citra-puspita-rahman/"
          target="_blank"
          style={linkStyle}
        >
          LINKEDIN
        </Link>
        <Link
          href="mailto:citrapuspita.r@gmail.com"
          target="_blank"
          style={linkStyle}
        >
          MAIL
        </Link>
      </Stack>
    </Stack>
  );
}
