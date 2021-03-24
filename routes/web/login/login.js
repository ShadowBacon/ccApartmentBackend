var express = require("express");
const Realm = require("realm");
const app = new Realm.App({ id: "ccapartmentplatform-udteh" });

var router = express.Router();

router.post("/loginMongoDB",function(req,res){
   Login();
});

 function Login() {
     const credentials = Realm.Credentials.anonymous();
     const user = app.logIn(credentials);
     console.log(`Logged in with the user id: ${user.id}`);
 }

module.exports = router;