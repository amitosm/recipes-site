import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Favorites from "./pages/favorites/Favorites";
import Search from "./pages/search/SearchRecipe";
import Recipie from "./pages/RecipePage.jsx/Recipie";
import FilterByCategory from "./pages/FilterByCategory/FilterByCategory";
import Register from "./pages/register/Register";
import MyRecipes from "./pages/myRecipes/MyRecipes";
import { Box } from "@mui/material";
import SearchByLetters from "./pages/search/searchByLetter/SearchByLetters";
import SearchByCategory from "./pages/search/searchByCategory/SearchByCategory";
import SearchByFreeText from "./pages/search/SearchByFreeText/SearchByFreeText";

export default function App() {
  return (
    <Box sx={{ height: "100vh", overflowY: "scroll" }}>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Search initSearch={"category"} />}></Route> */}
          <Route path="/search" element={<Search initSearch={"category"} />}>
            <Route path="letters" element={<SearchByLetters />} />
            <Route path="categories" element={<SearchByCategory />} />
            <Route path="freeSearch/:param" element={<SearchByFreeText />} />
            <Route
              path="category/:categoryName"
              element={<FilterByCategory />}
            ></Route>
            <Route path="meal/:mealId" element={<Recipie />}></Route>
          </Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>

          <Route path="/meal/:mealId" element={<Recipie />}></Route>
          <Route path="/myRecipes/:username" element={<MyRecipes />}></Route>

          {/* default route when starting the app */}
          <Route
            path="/"
            exact
            element={<Navigate to="/search/categories" replace />}
          />
        </Routes>
      </Router>
    </Box>
  );
}
