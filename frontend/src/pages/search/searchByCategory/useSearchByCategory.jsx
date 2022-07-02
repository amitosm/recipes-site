import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../../utilities/redux/dataApi/DataSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useSearchByCategory() {
  const { status, categories, currentCategory } = useSelector(
    (state) => state.data
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`../../search/category/${category}`);
  };

  useEffect(() => {
    if (categories.length) {
      // prevent another fetch if categories exists.
      return;
    } else if (!categories.length && status !== "loading") {
      dispatch(fetchCategories());
    }
  });

  return {
    categories,
    status,
    handleCategoryClick,
    currentCategory,
  };
}

export default useSearchByCategory;
