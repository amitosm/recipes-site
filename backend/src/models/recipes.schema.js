const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    recipes: [Object]

})



const Recipes = mongoose.model("Recipes", recipesSchema);

module.exports = Recipes;