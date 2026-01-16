import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Popper,
  Paper,
  ClickAwayListener,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Logo = "/assets/ProjectLogo.png";

const menuConfig = {
  "K-12 Solutions": ["Overview", "For Education", "Student Programs"],
  "Business Solutions": ["Overview", "Managed IT", "Device Lifecycle"],
  "Repair Services": [
    "Overview",
    "Device Repairs",
    "Device Buyback",
    "Device Accessories",
    "White Glove Services",
  ],
  About: [],
  Contact: [],
};

const Header = () => {
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (event, menu) => {
    setActiveMenu(menu);

    // If menu has NO dropdown → navigate directly
    if (!menuConfig[menu].length) {
      navigate(menu === "About" ? "/about" : "/contact-us");
      setOpenMenu(null);
      return;
    }

    // Toggle dropdown on click
    if (openMenu === menu) {
      setOpenMenu(null);
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
      setOpenMenu(menu);
    }
  };

  const handleSubMenuClick = (item) => {
    if (openMenu === "Repair Services" && item === "Device Repairs") {
      navigate("/iphone-repair");
    }

    setOpenMenu(null);
    setAnchorEl(null);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0,
          zIndex: 1200,
          backgroundColor: "#fff",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar
          sx={{
            minHeight: 72,
            px: { xs: 2, sm: 3, md: 4 },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box onClick={() => navigate("/")}>
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{ height: 65, cursor: "pointer" }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
            }}
          >
            {Object.keys(menuConfig).map((menu) => (
              <Box
                key={menu}
                onClick={(e) => handleMenuClick(e, menu)}
                sx={{ position: "relative", cursor: "pointer", pb: 1 }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    color: activeMenu === menu ? "#e53935" : "#333",
                  }}
                >
                  {menu}
                </Typography>

                {activeMenu === menu && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      width: "100%",
                      height: 3,
                      backgroundColor: "#e53935",
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>

          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Popper open={Boolean(openMenu)} anchorEl={anchorEl} placement="bottom-start">
        <ClickAwayListener onClickAway={() => setOpenMenu(null)}>
          <Paper
            sx={{
              mt: 1,
              width: 230,
              borderTop: "3px solid #e53935",
            }}
          >
            <List dense>
              {menuConfig[openMenu]?.map((item) => (
                <ListItem
                  key={item}
                  button
                  onClick={() => handleSubMenuClick(item)}
                >
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </ClickAwayListener>
      </Popper>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 260 }}>
          <List>
            {Object.keys(menuConfig).map((menu) => (
              <ListItem
                key={menu}
                button
                onClick={() => {
                  navigate("/");
                  setDrawerOpen(false);
                }}
              >
                <ListItemText primary={menu} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
