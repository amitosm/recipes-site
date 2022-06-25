import { Box, Typography } from "@mui/material";
import React from "react";
import DisplayCategories from "../../../components/DisplayCategories";
import useSearchByCategory from "./useSearchByCategory";

function SearchByCategory() {
  const { status, categories, handleCategoryClick } = useSearchByCategory();

  if (status === "loading") {
    return "LOADING";
  }

  return (
    <Box component="div">
      <Typography variant="h4"> Categories</Typography>
      <DisplayCategories
        categories={categories}
        handleCategoryClick={handleCategoryClick}
      />
    </Box>
  );
}

export default SearchByCategory;
