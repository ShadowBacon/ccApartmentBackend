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
   res.render("register/registerchoose");
});

router.get("/premium",function(req,res){
    res.render("home/premium")
})

router.get("/register/WGReg",function(req,res){
    res.render("register/registerWG/WGRegister");
});

router.get("/register/WgRegEnd", function(req,res){
   res.render("register/registerWG/WGregisterReg");
});

router.get("/register/WGregWG",function(req,res){
    res.render("register/registerWG/WGregisterAngWG");
});

router.get("/register/WGregWM",function(req,res){
    res.render("register/registerWG/WGregisterAngWM");
})

router.get("/register/SReg", function(req,res){
   res.render("register/registerSuchender/SuchenderStart");
});
router.get("/register/SRegEnd", function(req,res){
    res.render("register/registerSuchender/SuchenderReg");
});

module.exports = router;