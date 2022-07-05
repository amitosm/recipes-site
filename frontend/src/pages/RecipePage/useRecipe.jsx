import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMealById } from "../../utilities/redux/dataApi/DataSlice";
import { useParams } from "react-router-dom";

function useRecipe() {
  const { status, currentMeal } = useSelector((state) => state.data);
  const { mealId } = useParams();
  const dispatch = useDispatch();

  const preContentList = [
    {
      innerHtml: "Search",
      path: "/",
    },
    {
      innerHtml: `${currentMeal?.currentMeal.strCategory}`,
      path: `../../search/category/${currentMeal?.currentMeal.strCategory}`,
    },
  ];

  useEffect(() => {
    dispatch(fetchMealById(mealId));
  }, [mealId, dispatch]);

  return { status, currentMeal, preContentList };
}

export default useRecipe;
