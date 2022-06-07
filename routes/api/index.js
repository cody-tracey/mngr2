const router = require("express").Router();

//Routes
const users = require('./users');

//Paths
router.use("/users",users);

module.exports = router;