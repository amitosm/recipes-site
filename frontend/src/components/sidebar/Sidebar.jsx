import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputBase } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [freeText, setFreeText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Divider />
      <FormControl>
        {/* search options */}
        <List>
          {/* free text search */}
          <ListItem>
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                justifyContent: "center",
              }}
              placeholder="Search text"
              value={freeText}
              onChange={(e) => setFreeText(e.target.value)}
            />
            {/* search icon */}
            <ListItemIcon
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`/search/freeSearch/${freeText}`)}
            >
              <SearchIcon />
            </ListItemIcon>
          </ListItem>

          {/* other search options */}
          {[
            { label: "Sort by Category", setSearch: "categories" },
            { label: "Sort by A-Z", setSearch: "letters" },
          ].map((type, index) => (
            <ListItem
              key={type.label}
              disablePadding
              onClick={() => navigate(`/search/${type.setSearch}`)}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={type.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </FormControl>
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
        <SearchIcon sx={{ cursor: "pointer" }} />
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

export default Sidebar;
