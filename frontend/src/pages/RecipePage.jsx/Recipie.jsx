import React from "react";
import useRecipe from "./useRecipe";
import RecipieFullDetails from "../../components/RecipeFullDetails";
import PreContent from "../../components/preContent/PreContent";

function Recipie() {
  const { status, currentMeal, preContentList } = useRecipe();

  if (status === "loading") {
    return "LOADING";
  }

  return (
    <>
      <PreContent listOfActions={preContentList} />
      <RecipieFullDetails currentMeal={currentMeal} />
    </>
  );
}

export default Recipie;
