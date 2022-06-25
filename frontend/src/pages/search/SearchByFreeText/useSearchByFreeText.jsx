import { useSelector, useDispatch } from "react-redux";
import { freeSearch } from "../../../utilities/redux/dataApi/DataSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function useSearchByFreeText(param, reRender) {
  const { status, currentSearch } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (reRender && currentSearch?.currentSearchTerm !== param) {
      // if reRender flag is on and the terms are different, fetch the data.
      dispatch(freeSearch(param));
    }
  }, [reRender]);

  const handleRecipeClick = (mealId) => {
    return navigate(`/meal/${mealId}`);
  };
  return { status, currentSearch, handleRecipeClick };
}

export default useSearchByFreeText;
