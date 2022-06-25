const crypto = require("crypto");

const genPassword = (password) => {
  console.log(password)
  const user_salt = crypto.randomBytes(32).toString("hex");
  const user_hash = crypto
    .pbkdf2Sync(password, user_salt, 10000, 64, "sha512")
    .toString("hex");
  return {
    user_salt,
    user_hash,
  };
};

const validPassword = (password, user_hash, user_salt) => {
  console.log(password)
  const hashVerify = crypto
    .pbkdf2Sync(password, user_salt, 10000, 64, "sha512")
    .toString("hex");
  return user_hash === hashVerify;
};

module.exports = { genPassword, validPassword };