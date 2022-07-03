const router = require("express").Router();
const User = require("../models/user.schema");

const {
    createUser
} = require("../controllers/mongo.controller");
const multer = require('multer');
const Favorites = require("../models/favorites.schema");
const Recipes = require("../models/recipes.schema");


router.post("/addUser", multer().none(), (req, res) => {
    User.findOne({
        username: req.body.username
    }, async (err, user) => {
        if (err) {
            res.status(500).json({
                message: 'Please try again.'
            })
        }
        if (user) {
            res.status(409).json({
                message: 'Username is taken.'
            })
        }
        if (!user) {
            // user doesnt exist
            try {
                const createdUser = await createUser(req.body);
                res.status(201).json({
                    user: createdUser,
                    message: 'Created'
                });
            } catch (err) {
                console.log("DB ROUTE", err);
                res.status(500).json({
                    message: 'Please try again'
                });
            }
        }
    })
})

router.put("/addFavorite", async (req, res) => {
    console.log(req.body)
    const updateValue = req.body.favorites
    // add mealId ref to user
    const user = await User.findOneAndUpdate({
        _id: req.session.passport.user
    }, {
        $addToSet: {
            favorites: String(updateValue)
        }
    }, {
        new: true
    });

    // add mealId ref to favorites
    await Favorites.findOneAndUpdate({
        userId: req.session.passport.user
    }, {
        $addToSet: {
            favorites: req.body.meal
        }
    }, {
        new: true,
        upsert: true
    })
    res.status(200).json({
        message: "worked",
        newFavorites: user.favorites
    });
})

router.delete("/removeFavorite", async (req, res) => {
    const removeValue = req.body.favorites
    // remove mealId ref from user
    const user = await User.findOneAndUpdate({
        _id: req.session.passport.user
    }, {
        $pull: {
            favorites: String(removeValue)
        }
    }, {
        new: true
    });

    // remove mealId ref from favorites
    await Favorites.findOneAndUpdate({
        userId: req.session.passport.user
    }, {
        $pull: {
            favorites: {
                idMeal: String(removeValue)
            }
        }
    }, {
        new: true,
    });

    res.status(200).json({
        message: "worked",
        newFavorites: user.favorites
    });
})

router.get("/getAllFavorites", async (req, res) => {
    try {
        const favorites = await Favorites.findOne({
            userId: req.session.passport.user
        }).select({
            favorites: 1,
            _id: 0
        })
        res.status(200).json(favorites || {
            favorites: []
        });
    } catch (err) {
        res.status(500).json({
            favorites: []
        });
    }
})

router.post('/addRecipie', async (req, res) => {
    try {
        const recipe = await Recipes.findOneAndUpdate({
            userId: req.session.passport.user
        }, {
            $addToSet: {
                recipes: req.body
            }
        }, {
            new: true,
            upsert: true
        });
        res.status(200).json({
            message: 'added recipie'
        });
    } catch (err) {
        res.status(500).json({
            message: 'error'
        });
    }
})
module.exports = router;