var express = require("express");
const Realm = require("realm");
const app = new Realm.App({ id: "ccapartmentplatform-udteh" });
var router = express.Router();

router.get("/MongoDB", async function(req,res){
    const credentials = Realm.Credentials.emailPassword(
        "someone@example3.com","Pa55w0rd");
    try {
        const user = await app.logIn(credentials);
        console.log("Successfully logged in!", user.id);
    } catch (err) {
        console.error("Failed to log in", err.message);
    }
});

router.get("/logout", async function(req,res){
    await app.currentUser.logOut();
});

module.exports = router;