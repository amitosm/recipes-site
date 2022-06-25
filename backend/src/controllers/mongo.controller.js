const User = require("../models/user.schema");
const Favorites = require("../models/favorites.schema");
const {
    genPassword
} = require("../utilities/crypto");



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

const createFavorite = async (meal) => {

}

module.exports = {
    createUser
}