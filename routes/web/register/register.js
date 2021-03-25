var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    res.render("register/registerchoose");
});

router.get("/WGReg",function(req,res){
    res.render("register/registerWG/WGRegister");
});

router.get("/WgRegEnd", function(req,res){
    res.render("register/registerWG/WGregisterReg");
});

router.get("/WGregWG",function(req,res){
    res.render("register/registerWG/WGregisterAngWG");
});

router.get("/WGregWM",function(req,res){
    res.render("register/registerWG/WGregisterAngWM");
})

router.get("/SReg", function(req,res){
    res.render("register/registerSuchender/SuchenderStart");
});
router.get("/SRegEnd", function(req,res){
    res.render("register/registerSuchender/SuchenderReg");
});


module.exports = router;