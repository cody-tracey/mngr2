require('dotenv').config()

const express = require('express'),
    port = process.env.PORT || 5000,
    cors = require('cors'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

const APP = express();

//Bodyparser Middleware
APP.use(
    bodyParser.urlencoded({
        extended: false
    })
);

APP.use(bodyParser.json);

//Good ol Cors
APP.use(cors());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB

mongoose    
    .connect(
        db,
        {useNewUrlParser: true}
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

APP.listen(port, () => console.log(`Server running on ${port} => 🌎`));