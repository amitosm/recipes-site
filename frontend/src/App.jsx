import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favorites from "./pages/favorites/Favorites";
import Search from "./pages/search/SearchRecipe";
import Recipie from "./pages/RecipePage.jsx/Recipie";
import FilterByCategory from "./pages/FilterByCategory/FilterByCategory";
import Register from "./pages/register/Register";
import MyRecipes from "./pages/myRecipes/MyRecipes";
import { Box } from "@mui/material";

export default function App() {
  return (
    <Box sx={{ height: "100vh", overflowY: "scroll" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Search initSearch={"category"} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route
            path="/category/:categoryName"
            element={<FilterByCategory />}
          ></Route>
          <Route path="/meal/:mealId" element={<Recipie />}></Route>
          <Route path="/myRecipes/:username" element={<MyRecipes />}></Route>
        </Routes>
      </Router>
    </Box>
  );
}
