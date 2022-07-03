const router = require("express").Router();
const {
    fetchAPIcategories,
    fetchAPIcategory,
    fetchMealById,
    fetchMealsFreeSearch,
    fetchMealsByLetter,
    fetchAPIAreas,
} = require("../controllers/api.controller");
const getCleanObj = require("../utilities/dataManipulation");


router.get("/categories", async (req, res) => {
    try {
        const categories = await fetchAPIcategories();
        res.status(200).json(categories)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/areas", async (req, res) => {
    try {
        const areas = await fetchAPIAreas();
        res.status(200).json(areas)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get("/meals/:categoryName", async (req, res) => {
    try {
        const categoryName = req.params.categoryName;
        const categoryRecipes = await fetchAPIcategory(categoryName);
        res.status(200).json({
            categoryName: categoryName,
            meals: [...categoryRecipes.meals]
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/meal/:mealName", async (req, res) => {
    try {
        const mealName = req.params.mealName;
        const mealDetails = await fetchMealById(mealName);
        const ingredientAndMeasure = getCleanObj(mealDetails.meals[0], "strIngredient", "strMeasure")
        res.status(200).json({
            currentMeal: mealDetails.meals[0],
            ingredientAndMeasure: ingredientAndMeasure
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/freeSearch/:param", async (req, res) => {

    try {
        const text = req.params.param;
        const mealDetails = await fetchMealsFreeSearch(text);

        res.status(200).json({
            currentMeals: mealDetails.meals || [],
            currentSearchTerm: text,
        })
    } catch (err) {
        console.log("err in route:", err);
        res.status(500).json(err)
    }
})

router.get("/lettersSearch/:param", async (req, res) => {
    try {
        const letter = req.params.param;
        const mealDetails = await fetchMealsByLetter(letter);

        res.status(200).json({
            currentMeals: mealDetails.meals || [],
            currentSearchTerm: letter,
        })
    } catch (err) {
        console.log("err in route:", err);
        res.status(500).json(err)
    }

})

module.exports = router;