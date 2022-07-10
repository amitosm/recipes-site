import ResultsView from "../../components/ResultsView";
import { Typography } from "@mui/material";
import useFavorites from "./useFavorites";
import PreContent from "../../components/preContent/PreContent";
import Loading from "../../components/Loading";

function Favorites() {
  const { status, favoritesDetails, handleClickOnMeal, preContentList } =
    useFavorites();

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div>
      <PreContent listOfActions={preContentList} />
      {favoritesDetails?.length ? (
        <ResultsView
          header={"favorites"}
          meals={favoritesDetails}
          handleClickOnMeal={handleClickOnMeal}
        />
      ) : (
        <Typography>Nothing to show</Typography>
      )}
    </div>
  );
}

export default Favorites;
