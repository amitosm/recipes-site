import { useSelector } from "react-redux";
import { useEffect } from "react";
import useNotify from "../../../components/useNotify";
import { useNavigate } from "react-router-dom";

function useAddRecipe() {
  const { message } = useSelector((state) => state.auth);
  const { notify } = useNotify();
  const navigate = useNavigate();

  useEffect(() => {
    if (message === "added recipe") {
      notify("success", "Recipe added ");
      navigate("/myRecipes");
    }
  }, [message, navigate, notify]);
  return {};
}

export default useAddRecipe;
