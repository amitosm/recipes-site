import { Box } from "@mui/material";
import React from "react";
import PreContent from "../../components/preContent/PreContent";
import ResultsView from "../../components/ResultsView";
import useFilterByCategory from "./useFilterByCategory";

function FilterByCategory() {
  const { currentCategory, status, handleClickOnMeal, preContentList } =
    useFilterByCategory();

  if (status === "loading") {
    return "LOADING";
  }

  return (
    <Box sx={{}}>
      <PreContent listOfActions={preContentList} />
      {currentCategory && (
        <ResultsView
          header={currentCategory.categoryName}
          meals={currentCategory.meals}
          handleClickOnMeal={handleClickOnMeal}
        />
      )}
    </Box>
  );
}

export default FilterByCategory;
