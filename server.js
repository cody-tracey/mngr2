require('dotenv').config()

const express = require('express'),
    port = process.env.PORT || 5000,
    cors = require('cors'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    passport = require("passport"),
    routes = require("./routes");


const app = express();

//Bodyparser Middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

//Good ol Cors
app.use(cors());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use(routes);

app.listen(port, () => console.log(`Server running on ${port} => 🌎`));

