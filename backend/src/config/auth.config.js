const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user.schema");
const { validPassword } = require("../utilities/crypto");


const verifyCallback = async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {

        //user doesnt exists
        return done(null, false);
      }
      console.log(password);
      const isValid = validPassword(password, user.user_hash, user.user_salt);
      if (isValid) {
        //hash+ salt is good for given password
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      done(err);
    }
  };

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id); //req.session.passport.user = {id: user.id}
});

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await User.findById(userId);
    done(null, user); // req.user = { ...user }
  } catch (err) {
    done(err);
  }
});