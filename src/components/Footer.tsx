import { Grid, Button, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { navItems } from "@/data";

export default function Footer() {
  return (
    <Grid
      sx={{
        display: "flex",
        direction: "row",
        justifyContent: "center",
      }}
      container
    >
      <Grid sx={{ display: { xs: "none", md: "block" } }}>
        {navItems.map((item, index) => (
          <Button href={`#${item}`} key={item} color="primary">
            <span style={{ color: "#45afa0" }}>0{index + 1}.</span>
            {item}
          </Button>
        ))}
      </Grid>
      <Grid>
        <IconButton href="mailto:citrapuspita.r@gmail.com" target="_blank">
          <EmailIcon />
        </IconButton>
        <IconButton href="https://github.com/citra-rahman" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/citra-puspita-rahman/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
