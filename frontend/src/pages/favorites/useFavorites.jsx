import { useEffect } from "react";
import { fetchFavorites } from "../../utilities/redux/auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function useFavorites() {
  const dispatch = useDispatch();
  const { favoritesDetails, user, status } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [user]);

  const navigate = useNavigate();

  const handleClickOnMeal = (mealId) => {
    return navigate(`/meal/${mealId}`);
  };

  const preContentList = [
    {
      innerHtml: "Search",
      path: "/",
    },
  ];

  return {
    favoritesDetails,
    status,
    handleClickOnMeal,
    preContentList,
  };
}

export default useFavorites;
