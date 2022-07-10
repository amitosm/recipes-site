import {
  Grid,
  IconButton,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React, { useState } from "react";
import HoverPopover from "./Popover";

function Category({
  strCategoryThumb,
  strCategoryDescription,
  strCategory,
  handleClick,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Grid item onClick={() => handleClick(strCategory)}>
      <ImageListItem
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => handleClick(strCategory)}
      >
        <img
          src={`${strCategoryThumb}?w=248&fit=crop&auto=format`}
          alt={strCategory}
          loading="lazy"
        />
        <ImageListItemBar
          title={strCategory}
          actionIcon={
            <IconButton
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              sx={{
                color: "rgba(255, 255, 255, 0.54)",
              }}
            >
              <InfoIcon />
              <HoverPopover
                anchorEl={anchorEl}
                handlePopoverClose={handlePopoverClose}
                open={open}
                popoverText={strCategoryDescription}
              />
            </IconButton>
          }
        />
      </ImageListItem>
    </Grid>
  );
}

export default Category;
