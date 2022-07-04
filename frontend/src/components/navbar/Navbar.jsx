import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import useNavbar from "./useNavbar";
import UserNav from "./UserNav";
import GuestNav from "./GuestNav";
import { Link } from "react-router-dom";

export default function MenuAppBar() {
  const {
    isAuth,
    userMenuOpen,
    handleMenuOpen,
    handleMenuClose,
    handleLogout,
  } = useNavbar();

  // props for Usernav\ GuestNav
  const childProps = {
    handleMenuClose,
    handleMenuOpen,
    userMenuOpen,
    handleLogout,
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* logo and title */}
          <IconButton
            component={Link}
            to="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              flexGrow: 1,
              textDecoration: 0,
              color: "white",
            }}
          >
            Recipes
          </Typography>
          {/* render the user navBar OR guest navBar */}
          {isAuth ? (
            <UserNav props={childProps} />
          ) : (
            <GuestNav props={childProps} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
