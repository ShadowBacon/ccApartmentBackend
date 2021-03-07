var express = require("express");

var router = express.Router();


//TODO:: ADD in error and Info


router.use("/", require("./home"));


module.exports = router;
