import { useSelector, useDispatch } from "react-redux";
import { searchByLetter } from "../../../utilities/redux/dataApi/DataSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function useSearchByLetters() {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  const { status, currentSearch } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [letter, setLetter] = useState("");

  const handleChange = (event) => {
    setLetter(event.target.value);
  };

  useEffect(() => {
    if (
      !alphabet.includes(currentSearch?.activeSearch && status !== "loading")
    ) {
      // if current search isn't already by a letter
      dispatch(searchByLetter("a"));
    }
  }, []);

  const handleLetterClick = (letter) => {
    dispatch(searchByLetter(letter));
  };

  const handleRecipeClick = (mealId) => {
    return navigate(`/meal/${mealId}`);
  };
  return {
    alphabet,
    status,
    handleRecipeClick,
    currentSearch,
    handleLetterClick,
    letter,
    handleChange,
  };
}

export default useSearchByLetters;
