"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { navItems } from "@/data";
import { WindowProps } from "@/libs/type";
import { about } from "@/data";

const drawerWidth = 240;

export default function Header(props: WindowProps) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h5"
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        FOLIO / ARCHIVE
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              href={`#${item}`}
              sx={{
                textAlign: "center",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        color="info"
        sx={{ borderBottom: "2px solid black" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: { md: "2vmax 5vmax" },
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            fontWeight={900}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            FOLIO / ARCHIVE
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                href={`#${item}`}
                key={item}
                color="secondary"
                sx={{
                  paddingY: 0,
                  marginX: { sm: 1, md: 2 },
                  fontSize: "12px",
                  "&:hover": {
                    color: "primary.main",
                    borderRadius: 0,
                    borderBottom: "1px solid #800020",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Button
            variant="contained"
            color="primary"
            target="_blank"
            href={about.resumeLink}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Download CV
          </Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
