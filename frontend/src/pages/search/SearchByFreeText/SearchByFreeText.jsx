import React from "react";
import useSearchByFreeText from "./useSearchByFreeText";
import ResultsView from "../../../components/ResultsView";

function SearchByFreeText({ text, reRender }) {
  const { status, currentSearch, handleRecipeClick } = useSearchByFreeText(
    text,
    reRender
  );

  if (status === "loading") {
    return "LOADING";
  }

  return (
    <div>
      {currentSearch && (
        <ResultsView
          header={currentSearch.currentSearchTerm}
          meals={currentSearch.currentMeals}
          handleClickOnMeal={handleRecipeClick}
        />
      )}
    </div>
  );
}

export default SearchByFreeText;
