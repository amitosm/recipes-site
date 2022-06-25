require('dotenv').config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const connectMongo = require("./config/mongoose.config")
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");

const apiRouter = require("./routes/api.route");
const dbRouter = require("./routes/db.route");
const authRouter = require("./routes/auth.route");

connectMongo();

const PORT = process.env.PORT || 5000;
const app = express();

const sessionStore = MongoStore.create({
  client: mongoose.connection.getClient(),
  collectionName: "sessions",
  mongoUrl: process.env.MONGO_URI
});

// middlewares  
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

//seassion initialize 
require("./config/auth.config");
app.use(passport.initialize());
app.use(passport.session());


// routes
app.use("/api", apiRouter);
app.use("/db", dbRouter);
app.use("/auth", authRouter);


// connection
mongoose.connection.once("open", () => {
  console.log("mongo is connected");
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)

  });
})