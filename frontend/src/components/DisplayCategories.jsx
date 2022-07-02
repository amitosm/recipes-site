import { ImageList } from "@mui/material";
import React from "react";
import Category from "./Category";

function DisplayCategories({ categories, handleCategoryClick }) {
  return (
    <ImageList
      sx={{
        display: "flex",
        flexWrap: "wrap",
        // width: { xs: "auto", md: "100%" },
        pl: 3,
      }}
    >
      {categories.map((category) => (
        <Category
          key={category.idCategory}
          strCategoryThumb={category.strCategoryThumb}
          strCategory={category.strCategory}
          strCategoryDescription={category.strCategoryDescription}
          handleClick={handleCategoryClick}
        />
      ))}
    </ImageList>
  );
}

export default DisplayCategories;
