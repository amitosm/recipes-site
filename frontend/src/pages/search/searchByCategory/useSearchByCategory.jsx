import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../../utilities/redux/dataApi/DataSlice";
import { setMessage } from "../../../utilities/redux/auth/AuthSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useNotify from "../../../components/useNotify";

function useSearchByCategory() {
  const { status, categories, currentCategory } = useSelector(
    (state) => state.data
  );
  const { notify } = useNotify();

  const { message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    return navigate(`/category/${category}`);
  };

  useEffect(() => {
    if (categories.length) {
      // prevent another fetch if categories exists.
      return;
    } else if (!categories.length && status !== "loading") {
      dispatch(fetchCategories());
    }
  });

  // useEffect(() => {
  //   if (message === "Logged in!") {
  //     notify("success", message);
  //     dispatch(setMessage({ message: "" }));
  //   }
  // }, [message]);

  return {
    categories,
    status,
    handleCategoryClick,
    currentCategory,
  };
}

export default useSearchByCategory;
