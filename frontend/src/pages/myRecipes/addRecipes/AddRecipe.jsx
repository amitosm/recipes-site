import Box from "@mui/material/Box";
import AddRecipeForm from "../../../components/addRecipeForm/AddRecipeForm";
import useAddRecipe from "./useAddRecipe";

function AddRecipe() {
  useAddRecipe();

  return (
    <Box sx={{ py: "10px", ml: { xs: "auto", md: "110px" } }} maxWidth="sm">
      <AddRecipeForm header={"Add recipe"} />
    </Box>
  );
}

export default AddRecipe;
