var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
    //console.log("Hello I'm the Basic Log");
    res.render("home/index");
});

router.get("/home", function(req,res){
    res.render("home/home");
});

router.get("/login",function(req,res){
    res.render("login/loginstart");
});

router.get("/register",function(req,res){
   res.render("register/registerstart")
});

module.exports = router;