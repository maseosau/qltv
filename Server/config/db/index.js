const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/chiccloset")
        console.log('Connected to Mongoose')
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = { connect }