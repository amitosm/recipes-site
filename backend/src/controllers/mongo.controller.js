const User = require("../models/user.schema");
const Recipies = require("../models/recipes.schema");

const {
    genPassword
} = require("../utilities/crypto");
const {
    formatTheIngredients
} = require("../utilities/dataManipulation");
const Recipes = require("../models/recipes.schema");


const createUser = async (user) => {
    const {
        password,
        ...restOfUser
    } = user;
    const saltAndHash = genPassword(password);
    const newUser = new User({
        ...restOfUser,
        ...saltAndHash
    });
    try {
        await newUser.save();
        return newUser;
    } catch (err) {
        throw err
    }
}

const addRecipie = async (recipe, userId) => {
    const {
        strIngredientAndMeasure,
        ...currentMeal
    } = recipe;
    currentMeal.strMealThumb = "https://m.media-amazon.com/images/I/61+WeH5OQZL.jpg";
    const ingredientAndMeasure = formatTheIngredients(strIngredientAndMeasure);
    const recipeForDB = {
        currentMeal,
        ingredientAndMeasure
    }
    try {
        const newRecipe = await Recipes.findOneAndUpdate({
            userId: userId,
        }, {
            $addToSet: {
                recipes: recipeForDB
            }
        }, {
            new: true,
            upsert: true
        });
        return newRecipe;
    } catch (err) {
        throw (err)
    }
}


module.exports = {
    createUser,
    addRecipie
}