const User = require("../models/user.schema");
const { genPassword } = require("../utilities/crypto");

const createUser = async (newUser) => {
  const { password, ...restOfUser } = newUser;
  const saltAndHash = genPassword(password);
  const createdUser = new User({ ...restOfUser, ...saltAndHash });
  try {
    await createdUser.save();
    return createdUser;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = { createUser };
