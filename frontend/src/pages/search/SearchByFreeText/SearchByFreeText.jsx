import React from "react";
import useSearchByFreeText from "./useSearchByFreeText";
import ResultsView from "../../../components/ResultsView";

function SearchByFreeText() {
  const { status, currentSearch, handleRecipeClick } = useSearchByFreeText();

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
