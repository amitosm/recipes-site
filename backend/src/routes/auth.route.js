const router = require("express").Router();
const passport = require("passport");
const {
  createUser
} = require("../controllers/auth.controller");



router.post("/login", passport.authenticate("local"), (req, res) => {
  // if the middleware fails, the request won't happen.
  res.json({
    isAuth: true,
    user: req.user
  });
});

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return err;
    }
    res.json({
      message: "Logged out!"
    });
  });
});

router.get("/check-auth", (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.json({
      isAuth: true,
      user: req.user,
    });
  } else {
    res.json({
      isAuth: false,
      user: null,
    });
  }
});

module.exports = router;