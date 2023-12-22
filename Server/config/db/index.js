const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to Mongoose')
        const testQuery = await mongoose.connection.db.admin().ping();
        if (testQuery) {
            console.log('Connection test successful');
        } else {
            console.log('Connection test failed');
        }
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = { connect }