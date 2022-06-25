const mongoose = require("mongoose");

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (err) {
        console.log('connect err:')
        console.log(err)
    }
}

module.exports = connectMongo;