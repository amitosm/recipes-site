import React from "react";
import useRecipe from "./useRecipe";
import RecipeFullDetails from "../../components/RecipeFullDetails";
import PreContent from "../../components/preContent/PreContent";
import { Box } from "@mui/material";
import Loading from "../../components/Loading";

function Recipe() {
  const { status, currentMeal, preContentList } = useRecipe();

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <Box>
      <PreContent listOfActions={preContentList} />
      <RecipeFullDetails currentMeal={currentMeal} />
    </Box>
  );
}

export default Recipe;
