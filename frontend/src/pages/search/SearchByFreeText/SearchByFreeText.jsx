import React from "react";
import useSearchByFreeText from "./useSearchByFreeText";
import ResultsView from "../../../components/ResultsView";
import Loading from "../../../components/Loading";

function SearchByFreeText() {
  const { status, currentSearch, handleRecipeClick } = useSearchByFreeText();

  if (status === "loading") {
    return <Loading />;
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
