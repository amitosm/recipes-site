import { Box } from "@mui/material";
import DisplayCategories from "../../../components/DisplayCategories";
import Loading from "../../../components/Loading";
import useSearchByCategory from "./useSearchByCategory";

function SearchByCategory() {
  const { status, categories, handleCategoryClick } = useSearchByCategory();

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <Box
      sx={{
        mt: "20px",
        ml: { xs: "auto", md: "20px" },
      }}
    >
      <DisplayCategories
        categories={categories}
        handleCategoryClick={handleCategoryClick}
      />
    </Box>
  );
}

export default SearchByCategory;
