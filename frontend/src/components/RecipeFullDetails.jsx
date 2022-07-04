import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";

import ListWithOptinalCheckbox from "./ListWithOptinalCheckbox";
import { Box } from "@mui/system";
import FavoriteIconComp from "./favoriteIcon/FavoriteIcon";

function RecipeFullDetails({ currentMeal, favorites = true }) {
  return (
    <Card sx={{ boxShadow: "none" }}>
      {/* headers */}
      <CardHeader
        title={currentMeal && currentMeal.currentMeal.strMeal}
        subheader={
          currentMeal && (
            <div>
              <span>{currentMeal.currentMeal.strArea},</span>
              <span>{currentMeal.currentMeal.strCategory}</span>
            </div>
          )
        }
      />
      {/* meal image */}
      <CardMedia
        component="img"
        height="280"
        image={currentMeal && currentMeal.currentMeal.strMealThumb}
        alt="Paella dish"
      />
      {/* recipe actions */}
      {favorites && (
        <CardActions>
          {currentMeal && (
            <FavoriteIconComp
              meal={currentMeal.currentMeal}
              idMeal={currentMeal.currentMeal.idMeal}
            />
          )}
        </CardActions>
      )}
      {/* ingredients and instructions*/}
      {currentMeal && (
        <CardContent
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "30%" } }}>
            <ListWithOptinalCheckbox
              key={currentMeal.currentMeal.strMeal}
              objectToMap={currentMeal.ingredientAndMeasure}
              listHeader={"Ingredients"}
              checkbox={true}
            />
          </Box>
          <Box>
            <ListWithOptinalCheckbox
              objectToMap={{
                instructions: currentMeal.currentMeal.strInstructions,
              }}
              listHeader={"Instructions"}
            />
          </Box>
        </CardContent>
      )}
    </Card>
  );
}

export default RecipeFullDetails;
