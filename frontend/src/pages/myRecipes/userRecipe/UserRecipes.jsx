import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RecipeFullDetails from "../../../components/RecipeFullDetails";
import { useState } from "react";

function UserRecipes() {
  const { mealName } = useParams();
  const [currentMeal, setCurrentMeal] = useState();
  const { userRecipes } = useSelector((state) => state.auth);

  useEffect(() => {
    const meal = userRecipes.find((recipe) => {
      return recipe.currentMeal.strMeal === mealName;
    });
    console.log(currentMeal);
    setCurrentMeal(meal);
  }, [mealName]);

  //   return <div>test</div>;
  return <RecipeFullDetails currentMeal={currentMeal} favorites={false} />;
}

export default UserRecipes;
