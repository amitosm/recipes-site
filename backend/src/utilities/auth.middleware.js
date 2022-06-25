const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(401).json({ message: "You are unautherized" });
    }
  };
  
  module.exports = { isAuth };
  