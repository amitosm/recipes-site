import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRecipes } from "../utilities/redux/auth/AuthSlice";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function RecipesSidebar({ addHandler }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { userRecipes, status, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    console.log(userRecipes);
    if (message !== "userRecipes" && status !== "loading") {
      dispatch(fetchUserRecipes());
    }
  }, [message]);

  const drawer = (
    <Box>
      <Divider />
      <List>
        {/* Add new recipe */}
        <ListItemButton>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText onClick={addHandler} primary="Add new recipe" />
        </ListItemButton>

        <Divider />

        {/* existing recipes */}
        {userRecipes.length ? (
          userRecipes.map((recipe) => (
            <ListItemButton
              key={recipe.currentMeal.strMeal}
              onClick={() =>
                navigate(`/myRecipes/${recipe.currentMeal.strMeal}`)
              }
            >
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary={recipe.currentMeal.strMeal} />
            </ListItemButton>
          ))
        ) : (
          <Typography>No Recipes yet</Typography>
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Mobile Icon */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          mr: 2,
          display: { md: "none" },
          alignSelf: "start",
          ml: 2,
          justifySelf: "end",
        }}
      >
        <ListAltIcon sx={{ cursor: "pointer" }} />
      </IconButton>
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        {drawer}
      </Drawer>
      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          position: "inherit",
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            position: "inherit",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default RecipesSidebar;
