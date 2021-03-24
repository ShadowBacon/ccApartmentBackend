var express = require("express");

var router = express.Router();


//TODO:: ADD in error and Info


router.use("/", require("./home"));
router.use("/loginuser", require("./login/login"));
router.use("/register", require("./register/register"))


module.exports = router;
