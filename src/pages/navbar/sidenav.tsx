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

function Navbar() {
  const [search, setSearch] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  //   const dispatch = useDispatch();
  //   const { news, loading, error } = useSelector(
  //     (state: RootState) => state.news
  //   );
  //   let newsData = news;
  //   useEffect(() => {
  //     dispatch(fetchNews());
  //   }, [dispatch]);
  //   console.log(newsData);

  //   const filteredNews = newsData.filter((item) =>
  //     item.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   console.log(filteredNews);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
              mr: 40,
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
                    right: 280,
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
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Notification</Typography>
              </MenuItem> */}
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
            <Button>
              <input
                type="text"
                style={{
                  borderRadius: "10px",
                  borderWidth: "1px",
                  borderColor: "grey",
                }}
                // onChange={(e) => {
                //   setSearch(e.target.value);
                //   setShowResults(!!e.target.value);
                // }}
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
