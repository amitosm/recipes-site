import { Box } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import SearchByCategory from "./searchByCategory/SearchByCategory";
import SearchByLetters from "./searchByLetter/SearchByLetters";
import { useState } from "react";
import SearchByFreeText from "./SearchByFreeText/SearchByFreeText";
import useSearchRecipes from "./useSearchRecipes";

function Search({ initSearch = "category" }) {
  const { message } = useSearchRecipes();
  const [activeSearch, setActiveSearch] = useState({
    activeSearch: initSearch,
    textInputVal: "",
    reRender: false,
  });

  const switchRender = (searchParam) => {
    switch (searchParam) {
      case "category":
        return <SearchByCategory />;
      case "byLetters":
        return <SearchByLetters />;
      case "text":
        return (
          <SearchByFreeText
            text={activeSearch.textInputVal}
            reRender={activeSearch.reRender}
          />
        );
      default:
        return <SearchByCategory />;
    }
  };

  return (
    <Box
      className="searchPage--container"
      sx={{
        display: "flex",
        flexDirection: { xs: "row-reverse", md: "row" },
      }}
    >
      <Sidebar
        setNewSearch={setActiveSearch}
        activeSearch={activeSearch.activeSearch}
      />
      {/* determinants what component to render */}
      {switchRender(activeSearch.activeSearch)}
    </Box>
  );
}

export default Search;
