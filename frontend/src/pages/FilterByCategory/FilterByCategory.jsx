import { Box } from "@mui/material";
import React from "react";
import Loading from "../../components/Loading";
import PreContent from "../../components/preContent/PreContent";
import ResultsView from "../../components/ResultsView";
import useFilterByCategory from "./useFilterByCategory";

function FilterByCategory() {
  const { currentCategory, status, handleClickOnMeal, preContentList } =
    useFilterByCategory();

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
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
