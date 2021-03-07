var express = require("express");

var router = express.Router();

router.use("/user", require("./user"));
router.use("/login", require("./Login/login"));
router.use("/register", require("./Register/register"))

module.exports = router;