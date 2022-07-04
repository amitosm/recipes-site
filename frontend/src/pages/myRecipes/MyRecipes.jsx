// import AddRecipie from "./addRecipie/AddRecipie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box, Button } from "@mui/material";
import RecipesSidebar from "../../components/recipesSidebar";

export default function MyRecipes() {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("not in the condition");

    if (!isAuth) {
      console.log("in my recipies use effect");
      console.log(isAuth);
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
