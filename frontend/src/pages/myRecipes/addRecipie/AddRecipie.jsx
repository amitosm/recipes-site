import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AddRecipieForm from "../../../components/addRecipiForm/AddRecipieForm";

function AddRecipie() {
  return (
    <Box>
      <Container sx={{ py: 10 }} maxWidth="sm">
        <AddRecipieForm header={"Add Recipie"} />
      </Container>
    </Box>
  );
}

export default AddRecipie;
