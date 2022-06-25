const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    user_hash: {
        type: String,
        trim: true,
        required: true
    },
    user_salt: {
        type: String,
        trim: true,
        required: true
    },
    favorites: {
        type: [Number],
        default: []
    }
})

const User = mongoose.model("Users", userSchema);

module.exports = User;