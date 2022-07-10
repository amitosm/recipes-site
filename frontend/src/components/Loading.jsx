import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Loading() {
  return (
    <Box>
      <CircularProgress color="inherit" size={20} sx={{ display: "flex" }} />
    </Box>
  );
}

export default Loading;
