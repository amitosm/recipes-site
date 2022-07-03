const mongoose = require("mongoose");

const favortiesSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    favorites: [Object]


})



const Favorites = mongoose.model("Favorites", favortiesSchema);

module.exports = Favorites;