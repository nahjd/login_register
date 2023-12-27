import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./sidenav.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ExploreIcon from "@mui/icons-material/Explore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function Navbar() {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setData(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setData(null);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#1E293B",
        position: "absolute",
        top: "0",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
              flexGrow: 5,
            }}
          >
            <Box style={{ marginLeft: 0 }}>
              <Link
                to="/home"
                style={{
                  textDecoration: "none",
                  fontSize: "50px",
                  color: "white",
                  position: "relative",
                }}
              >
                Instagram
                <img
                  src="https://images.prestigeonline.com/wp-content/uploads/sites/8/2023/02/27133652/alexander-shatov-71qk8odibko-unsplash-1.jpeg"
                  alt="Logo"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: "280px",
                    maxWidth: "100px",
                    height: "60px",
                  }}
                />
              </Link>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#8A89C0" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={data}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(data)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Friends</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">NewsLetter</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontWeight: "900",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <CircleNotificationsIcon
                style={{ color: "#8A89C0", fontSize: "30px" }}
              />
            </Button>
            <Link to="/about">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "900",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <AccountCircleIcon
                  style={{ color: "#8A89C0", fontSize: "30px" }}
                />
              </Button>
            </Link>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#8A89C0",
                display: "block",
                fontWeight: "700",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <ExploreIcon style={{ fontSize: "30px" }} />
            </Button>
            <Link to="/addfriend">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#8A89C0",
                  display: "block",
                  fontWeight: "700",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <GroupAddIcon style={{ fontSize: "30px" }} />
              </Button>
            </Link>
            <Button>
              <input
                type="text"
                placeholder="Search adding..."
                value={search}
                onChange={handleSearchChange}
                style={{
                  borderRadius: "10px",
                  borderWidth: "1px",
                  borderColor: "grey",
                }}
              />{" "}
              <SearchIcon style={{ color: "#8A89C0" }} />
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#8A89C0",
                display: "block",
                fontWeight: "700",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <SettingsIcon style={{ fontSize: "30px" }} />
            </Button>
            <Link to="/register">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#8A89C0",
                  display: "block",
                  fontWeight: "700",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <ExitToAppIcon style={{ fontSize: "30px" }} />
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
