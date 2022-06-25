import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../utilities/redux/auth/AuthSlice";
import useNotify from "../../components/useNotify";

function useFavoriteIcon(idMeal, meal) {
  const { user, isAuth } = useSelector((state) => state.auth);
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = user?.favorites || [];
  const dispatch = useDispatch();

  const { notify } = useNotify();

  useEffect(() => {
    const result = favorites.includes(Number(idMeal));
    setIsFavorite(result);
  }, [favorites]);

  const handleAddFavoriteClick = (mealId) => {
    dispatch(addFavorites({ meal, mealId }));
  };

  const handleRemoveFavoriteClick = (mealId) => {
    dispatch(removeFavorites({ meal, mealId }));
  };

  const handleGuestClick = () => {
    notify("warning", "Please login");
  };

  return {
    isAuth,
    handleAddFavoriteClick,
    handleRemoveFavoriteClick,
    isFavorite,
    handleGuestClick,
  };
}

export default useFavoriteIcon;
