import React from "react";
import useRecipe from "./useRecipe";
import RecipeFullDetails from "../../components/RecipeFullDetails";
import PreContent from "../../components/preContent/PreContent";

function Recipe() {
  const { status, currentMeal, preContentList } = useRecipe();

  if (status === "loading") {
    return "LOADING";
  }

  return (
    <>
      <PreContent listOfActions={preContentList} />
      <RecipeFullDetails currentMeal={currentMeal} />
    </>
  );
}

export default Recipe;
