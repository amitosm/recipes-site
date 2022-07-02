import { useSelector, useDispatch } from "react-redux";
import { freeSearch } from "../../../utilities/redux/dataApi/DataSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function useSearchByFreeText() {
  const { status, currentSearch } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { param } = useParams();

  useEffect(() => {
    if (currentSearch?.currentSearchTerm !== param) {
      // prevent unnecessary fetch
      dispatch(freeSearch(param));
    }
  }, [param]);

  const handleRecipeClick = (mealId) => {
    navigate(`../../search/meal/${mealId}`);
  };
  return { status, currentSearch, handleRecipeClick };
}

export default useSearchByFreeText;
