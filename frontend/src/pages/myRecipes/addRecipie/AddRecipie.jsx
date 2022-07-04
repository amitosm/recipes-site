import Box from "@mui/material/Box";
import AddRecipieForm from "../../../components/addRecipiForm/AddRecipieForm";

function AddRecipie() {
  return (
    <Box sx={{ py: "10px", ml: { xs: "auto", md: "110px" } }} maxWidth="sm">
      <AddRecipieForm header={"Add Recipie"} />
    </Box>
  );
}

export default AddRecipie;
