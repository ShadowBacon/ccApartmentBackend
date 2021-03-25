var express = require("express");
const Realm = require("realm");
const app = new Realm.App({ id: "ccapartmentplatform-udteh" });

var router = express.Router();

router.post("/loginMongoDB",function(req,res){
});

router.get("/",function(req,res){
    res.render("login/loginstart");
});

module.exports = router;