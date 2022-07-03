const User = require("../models/user.schema");
const Recipies = require("../models/recipes.schema");

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


module.exports = {
    createUser
}