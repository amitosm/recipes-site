import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
import useAddRecipeForm from "./useAddRecipeForm";
import SelectWithList from "./SelectWithList";

function AddRecipeForm({ header }) {
  const {
    form,
    handleDyncamicInputChange,
    addNewInput,
    removeInput,
    handleAddRecipe,
    setForm,
    validationMsg,
    categories,
    areas,
    handleChangeCategory,
    handleChangeArea,
  } = useAddRecipeForm();

  return (
    <Card className="addRecipeForm--container">
      <CardContent>
        {/* header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
            {header}
          </Typography>
        </Box>

        {/* form */}
        <Box component="form" noValidate>
          <TextField
            id="mealName"
            fullWidth
            label="Meal Name *"
            name="strMeal"
            margin="normal"
            variant="outlined"
            value={form.strMeal}
            onChange={(e) =>
              setForm((state) => ({
                ...state,
                strMeal: e.target.value,
              }))
            }
          />
          <SelectWithList
            header={"Category"}
            currValue={form.strCategory}
            handleChange={handleChangeCategory}
            valuesList={categories}
            keyName={"strCategory"}
          />
          <SelectWithList
            header={"Areas"}
            currValue={form.strArea}
            handleChange={handleChangeArea}
            valuesList={areas}
            keyName={"strArea"}
            styles={{ mt: 2 }}
          />
          {/* dynamic IngredientAndMeasure rows */}
          {form.strIngredientAndMeasure.map((row, index) => {
            const { ingredirnt, measure } = row;
            return (
              <Box
                key={`ingreddient${index}`}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <TextField
                  name="ingredient"
                  label="Ingredient *"
                  value={ingredirnt}
                  onChange={(e) => handleDyncamicInputChange(e, index)}
                />
                <TextField
                  name="measure"
                  label="Measurement *"
                  value={measure}
                  onChange={(e) => handleDyncamicInputChange(e, index)}
                />
                {/* icon check */}
                {index === form.strIngredientAndMeasure.length - 1 ? (
                  <IconButton
                    color="success"
                    aria-label="new line"
                    component="span"
                    onClick={addNewInput}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    color="error"
                    aria-label="new line"
                    component="span"
                    onClick={() => removeInput(index)}
                  >
                    <CancelIcon />
                  </IconButton>
                )}
              </Box>
            );
          })}

          <TextField
            id="instructions"
            fullWidth
            label="Instructions *"
            margin="normal"
            value={form.strInstructions}
            onChange={(e) =>
              setForm((state) => ({
                ...state,
                strInstructions: e.target.value,
              }))
            }
            multiline
            rows={5}
            variant="outlined"
          />
        </Box>

        {/* validation msg */}
        {validationMsg && (
          <Typography color={"error"}>{validationMsg}</Typography>
        )}
        {/* submit btn */}
        <Button
          fullWidth
          size="large"
          sx={{ mt: 2 }}
          variant="contained"
          onClick={handleAddRecipe}
        >
          {header}
        </Button>
      </CardContent>
    </Card>
  );
}

export default AddRecipeForm;
