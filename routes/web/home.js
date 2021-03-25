var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    //console.log("Hello I'm the Basic Log");
    res.render("home/home");
});

router.get("/home", function(req,res){
    res.render("home/home");
});

router.get("/premium",function(req,res){
    res.render("home/premium")
})

router.get("/SHome", function(req,res){
    res.render("home/SHome");
});

router.get("/WGHome", function(req,res){
    res.render("home/WGHome");
});

module.exports = router;