import { Box, Typography } from "@mui/material";
import React from "react";
import RecipeIntro from "./recipieIntro/RecipeIntro";

function ResultsView({ header = null, meals, handleClickOnMeal }) {
  return (
    <Box>
      {/* header */}
      {header ? (
        <Typography
          sx={{ width: "80%", mb: 2, textAlign: "center" }}
          component="div"
          variant="h3"
        >
          {header}
        </Typography>
      ) : null}

      {/* map the meals */}
      <Box
        sx={{
          margin: "auto",
          width: { xs: "auto", md: "90%" },
          pl: 3,
          display: "flex",
          flexWrap: "wrap",
          gap: 7,
        }}
      >
        {meals.length ? (
          meals.map((meal) => (
            <RecipeIntro
              key={meal.idMeal}
              meal={meal}
              handleClick={handleClickOnMeal}
            />
          ))
        ) : (
          <Typography>nothing to show</Typography>
        )}
      </Box>
    </Box>
  );
}

export default ResultsView;
