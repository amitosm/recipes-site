import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "../../utilities/redux/auth/AuthSlice";
import {
  fetchCategories,
  fetchAreas,
} from "../../utilities/redux/dataApi/DataSlice";

function useAddRecipeForm() {
  const [validationMsg, setValidationMsg] = useState("");
  const { categories, areas, status } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    idMeal: uuid(),
    strMeal: "",
    strCategory: "",
    strArea: "",
    strInstructions: "",
    strIngredientAndMeasure: [{ ingredient: "", measure: "" }],
  });

  useEffect(() => {
    // fetch data
    if (!categories.length && status !== "loading") {
      dispatch(fetchCategories());
    }
    if (!areas.length && status !== "loading") {
      dispatch(fetchAreas());
    }
  }, [areas, categories, dispatch, status]);

  const checkFilledInputs = (form) => {
    // return false if any of the inputs are empty.
    for (const prop in form) {
      if (!form[prop]) {
        setValidationMsg("All fileds are requiered.");
        return false;
      }
    }
    return true;
  };

  const handleAddRecipe = () => {
    if (checkFilledInputs(form)) {
      dispatch(addRecipe(form));
    }
  };

  const handleDyncamicInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...form.strIngredientAndMeasure];
    list[index][name] = value;
    setForm((state) => ({ ...state, strIngredientAndMeasure: list }));
  };

  const addNewInput = () => {
    const list = [
      ...form.strIngredientAndMeasure,
      { ingredient: "", measure: "" },
    ];
    setForm((state) => ({ ...state, strIngredientAndMeasure: list }));
  };

  const removeInput = (index) => {
    const list = [...form.strIngredientAndMeasure];
    list.splice(index, 1);
    setForm((state) => ({ ...state, strIngredientAndMeasure: list }));
  };

  return {
    form,
    setForm,
    handleDyncamicInputChange,
    addNewInput,
    removeInput,
    handleAddRecipe,
    validationMsg,
    categories,
    areas,
  };
}

export default useAddRecipeForm;
