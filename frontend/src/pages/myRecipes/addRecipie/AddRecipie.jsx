import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { v4 as uuid } from "uuid";

function AddRecipie() {
  const [form, setForm] = useState({
    idMeal: uuid(),
    strMeal: "",
    strCategory: "",
    strArea: "",
    strInstructions: "",
    strIngredient: [],
    strMeasure: [],
  });

  //   useEffect(() => {
  //     console.log(form);
  //   }, []);

  return (
    <Box>
      <Container sx={{ py: 10 }} maxWidth="sm">
        <Card>
          <CardContent>
            {/* header */}
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
                Add A Recipie
              </Typography>
            </Box>
            {/* form */}
            <Box component="form" noValidate>
              <TextField
                id="mealName"
                fullWidth
                label="Meal Name *"
                margin="normal"
                variant="outlined"
              />
              {/* select: category, area */}

              <TextField
                id="instructions"
                fullWidth
                label="Instructions *"
                margin="normal"
                multiline
                rows={5}
                variant="outlined"
              />
            </Box>
            <Button fullWidth size="large" sx={{ mt: 2 }} variant="contained">
              Add Recipie
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AddRecipie;
