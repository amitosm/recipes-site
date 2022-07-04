import AccountCircle from "@mui/icons-material/AccountCircle";
import { Tab, IconButton, Menu, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import React from "react";

// responsive design for logged users.
function UserNav({ props }) {
  const { handleMenuClose, handleMenuOpen, userMenuOpen, handleLogout } = props;
  return (
    <Box variant="div" sx={{ display: "flex" }}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/favorites"
        >
          Favorites
        </Button>
        <Button variant="inherit" component={Link} to={`/myRecipes/`}>
          My Recipes
        </Button>
      </Box>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <AccountCircle />
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
          sx={{ display: "flex", textAlign: "start" }}
          onClick={handleMenuClose}
          label="Home"
          to="/"
        />
        <Tab
          component={Link}
          sx={{ display: "flex" }}
          onClick={handleMenuClose}
          label="Settings"
          to="/"
        />
        <Tab
          component={Link}
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={handleMenuClose}
          label="Favorites"
          to="/favorites"
        />
        <Tab
          component={Link}
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={handleMenuClose}
          label="My Recipes"
          to={`/myRecipes`}
        />
        <Tab
          component={Link}
          sx={{ display: "flex" }}
          onClick={handleLogout}
          label="Logout"
          to="/"
        />
      </Menu>
    </Box>
  );
}

export default UserNav;
