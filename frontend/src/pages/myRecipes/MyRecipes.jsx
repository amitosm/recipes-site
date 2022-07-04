// import addRecipe from "./addRecipe/addRecipe";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import RecipesSidebar from "../../components/recipesSidebar";

export default function MyRecipes() {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const handleAddClick = () => {
    navigate("/myRecipes/add");
  };
  return (
    <Box
      sx={{
        display: { xs: "auto", md: "flex" },
        flexDirection: { xs: "row-reverse", md: "row" },
      }}
    >
      <RecipesSidebar addHandler={handleAddClick} />
      <Outlet />
    </Box>
  );
}
