const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const path = require('path');
const app = express();

const db = require('./config/db');
// const route = require('./routes');

db.connect();

dotenv.config();
const port = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());


// route(app);

app.listen(port, function (err) {
    if (err) {
        console.log('Something went wrong', err);
    } else {
        console.log('Server is listening on port ' + port);
    }
});
