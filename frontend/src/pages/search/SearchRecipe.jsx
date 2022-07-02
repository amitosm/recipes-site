import { Box } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import useSearchRecipes from "./useSearchRecipes";
import { Outlet } from "react-router-dom";

function Search() {
  useSearchRecipes();

  return (
    <Box
      className="searchPage--container"
      sx={{
        display: "flex",
        flexDirection: { xs: "row-reverse", md: "row" },
      }}
    >
      <Sidebar />
      {/* determinants what component to render */}
      {/* {switchRender(activeSearch.activeSearch)} */}
      <Outlet />
    </Box>
  );
}

export default Search;
