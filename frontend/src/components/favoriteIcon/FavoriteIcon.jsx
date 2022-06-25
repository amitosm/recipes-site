import { IconButton } from "@mui/material";
import React from "react";
import useFavoriteIcon from "./useFavoriteIcon";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function FavoriteIconComp({ idMeal, meal }) {
  const {
    isAuth,
    isFavorite,
    handleAddFavoriteClick,
    handleRemoveFavoriteClick,
    handleGuestClick,
  } = useFavoriteIcon(idMeal, meal);

  // not auth => always FavoriteBorderIcon
  // auth => liked : favorite icon, unliked : FavoriteBorderIcon
  return (
    <>
      <IconButton
        aria-label="favorites"
        onClick={() =>
          isFavorite
            ? handleRemoveFavoriteClick(idMeal)
            : isAuth
            ? handleAddFavoriteClick(idMeal)
            : handleGuestClick()
        }
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </>
  );
}

export default FavoriteIconComp;
