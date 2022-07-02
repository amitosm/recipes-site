import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, Button, Tab } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function GuestNav({ props }) {
  const { handleMenuOpen, userMenuOpen, handleMenuClose } = props;
  return (
    <Box variant="div" sx={{ display: "flex" }}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/login"
        >
          SIGN IN
        </Button>
        <Button variant="inherit" component={Link} to="/register">
          SIGN UP
        </Button>
      </Box>
      <IconButton
        sx={{ display: { xs: "inline-block", md: "none" } }}
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={userMenuOpen}
        open={Boolean(userMenuOpen)}
        onClose={handleMenuClose}
      >
        <Tab
          component={Link}
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={handleMenuClose}
          label="Sign in"
          to="/login"
        />
        <Tab
          component={Link}
          sx={{ display: "flex" }}
          onClick={handleMenuClose}
          label="Sign up"
          to="/register"
        />
      </Menu>
    </Box>
  );
}

export default GuestNav;
