const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone_number: {type: String, required: true, unique: true},
    address: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    create_at: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Users', Users);