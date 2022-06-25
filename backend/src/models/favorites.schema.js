const mongoose = require("mongoose");

const favortiesSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    favorites: [Object]


})

// {
//     idMeal: {
//         type: String,
//         trim: true,
//         required: true,
//     },
//     strMeal: {
//         type: String,
//         required: true
//     },
//     strMealThumb: {
//         type: String,
//         required: true
//     },
// }

const Favorites = mongoose.model("Favorites", favortiesSchema);

module.exports = Favorites;