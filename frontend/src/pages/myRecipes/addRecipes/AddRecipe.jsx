import Box from "@mui/material/Box";
import AddRecipeForm from "../../../components/addRecipeForm/AddRecipeForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import useNotify from "../../../components/useNotify";
import { setMessage } from "../../../utilities/redux/auth/AuthSlice";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const { message } = useSelector((state) => state.auth);
  const { notify } = useNotify();
  const navigate = useNavigate();

  useEffect(() => {
    if (message === "added recipe") {
      notify("success", "Recipe added ");
      navigate("/myRecipes");
    }
  }, [message]);

  return (
    <Box sx={{ py: "10px", ml: { xs: "auto", md: "110px" } }} maxWidth="sm">
      <AddRecipeForm header={"Add recipe"} />
    </Box>
  );
}

export default AddRecipe;
