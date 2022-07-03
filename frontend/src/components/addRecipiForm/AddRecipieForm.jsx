import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import useAddRecipieForm from "./useAddRecipieForm";

function AddRecipieForm({ header }) {
  const {
    form,
    handleDyncamicInputChange,
    addNewInput,
    removeInput,
    handleAddRecipie,
    setForm,
    validationMsg,
    categories,
    areas,
  } = useAddRecipieForm();

  return (
    <Card>
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
          {/* select for categories and areas */}
          <FormControl
            sx={{ minWidth: { md: 252 }, width: { xs: "100%" }, mr: 2 }}
          >
            <InputLabel id="select-label">Category</InputLabel>

            <Select
              fullWidth
              labelId="select-label"
              id="select-category"
              value={form.strCategory}
              label="Category"
              onChange={(e) =>
                setForm((state) => ({
                  ...state,
                  strCategory: e.target.value,
                }))
              }
            >
              {categories.map((category) => (
                <MenuItem
                  key={category.idCategory}
                  value={category.strCategory}
                >
                  {category.strCategory}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/*  select for areas */}
          <FormControl
            sx={{ minWidth: { md: 252 }, width: { xs: "100%" }, mt: { xs: 2 } }}
          >
            <InputLabel id="select-label">Area</InputLabel>
            <Select
              labelId="select-label"
              id="select-category"
              value={form.strArea}
              label="Category"
              onChange={(e) =>
                setForm((state) => ({
                  ...state,
                  strArea: e.target.value,
                }))
              }
            >
              {areas.map((area) => (
                <MenuItem key={area.strArea} value={area.strArea}>
                  {area.strArea}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
          onClick={handleAddRecipie}
        >
          {header}
        </Button>
      </CardContent>
    </Card>
  );
}

export default AddRecipieForm;
