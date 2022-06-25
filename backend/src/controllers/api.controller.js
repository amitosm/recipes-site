const axios = require("axios");

const fetchAPIcategories = async () => {
  try {

    const categories = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    return categories.data.categories
  } catch (error) {
    console.log("api fetch error:");
    console.log(error);
  }
};

const fetchAPIcategory = async (categoryName) => {
  try {

    const categoryRecipes = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
    return categoryRecipes.data
  } catch (error) {
    console.log("api fetch error");
    return error
  }
};

const fetchMealById = async (mealId) => {
  try {
    const mealDetails = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    return mealDetails.data
  } catch (error) {
    console.log("api fetch error");
    return error
  }
};


const fetchMealsFreeSearch = async (param) => {
  try {
    const mealDetails = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${param}`)
    return mealDetails.data
  } catch (error) {
    console.log("api fetch error");
    throw error
  }
};


const fetchMealsByLetter = async (param) => {
  // https://www.themealdb.com/api/json/v1/1/search.php?f=
  try {
    const mealDetails = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${param}`)
    return mealDetails.data
  } catch (error) {
    console.log("api fetch error");
    throw error
  }
};

module.exports = {
  fetchAPIcategories,
  fetchAPIcategory,
  fetchMealById,
  fetchMealsFreeSearch,
  fetchMealsByLetter,
}