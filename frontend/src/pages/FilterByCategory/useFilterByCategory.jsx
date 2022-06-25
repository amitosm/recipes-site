import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMealsByCategory } from "../../utilities/redux/dataApi/DataSlice";

function useFilterByCategory() {
  const { status, currentCategory } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(fetchMealsByCategory(categoryName));
  }, []);

  const handleClickOnMeal = (mealId) => {
    return navigate(`/meal/${mealId}`);
  };

  const preContentList = [
    {
      innerHtml: "Search",
      path: "/",
    },
  ];

  return { status, currentCategory, handleClickOnMeal, preContentList };
}

export default useFilterByCategory;
