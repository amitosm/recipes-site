import { Grid } from "@mui/material";
import React from "react";
import Category from "./Category";

function DisplayCategories({ categories, handleCategoryClick }) {
  return (
    <Grid container spacing={2} gap={"30px"} ml={"20px"}>
      {categories.map((category) => (
        <Category
          key={category.idCategory}
          strCategoryThumb={category.strCategoryThumb}
          strCategory={category.strCategory}
          strCategoryDescription={category.strCategoryDescription}
          handleClick={handleCategoryClick}
        />
      ))}
    </Grid>
  );
}

export default DisplayCategories;
