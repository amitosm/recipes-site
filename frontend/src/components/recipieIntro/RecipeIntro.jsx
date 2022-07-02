import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";

import ShareIcon from "@mui/icons-material/Share";
import FavoriteIconComp from "../favoriteIcon/FavoriteIcon";

export default function RecipeIntro({ meal, handleClick }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      {/* meal image */}
      <CardMedia
        onClick={() => handleClick(meal.idMeal)}
        component="img"
        image={meal.strMealThumb}
        alt={meal.strMeal}
      />
      {/* header */}
      <CardHeader
        onClick={() => handleClick(meal.idMeal)}
        title={meal.strMeal}
      />

      {/* card actions */}
      <CardActions disableSpacing>
        <FavoriteIconComp meal={meal} idMeal={meal.idMeal} key={meal.idMeal} />
      </CardActions>
    </Card>
  );
}
