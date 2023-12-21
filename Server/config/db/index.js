const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://21520766:QuocDuy123@cluster0.e0qaj3r.mongodb.net/?retryWrites=true&w=majority")
        console.log('Connected to Mongoose')
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = { connect }