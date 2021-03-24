var express = require("express");
const Realm = require("realm");
const app = new Realm.App({ id: "ccapartmentplatform-udteh" });
var router = express.Router();

router.get("/register", async function(req,res){
  try {
    const email = "someone@example3.com";
    const password = "Pa55w0rd";

    await app.emailPasswordAuth.registerUser(email, password);
  } catch (err) {
        console.error("Failed to Register ", err.message);
  }

  const credentials = Realm.Credentials.emailPassword(
      "someone@example3.com","Pa55w0rd");
  try {
    const user = await app.logIn(credentials);
    console.log("Successfully logged in!", user.id);
  } catch (err) {
    console.error("Failed to log in", err.message);
  }

});

router.get("/registerdata", async function(rey,res){

  const user = app.currentUser;

  try{
  const realm = await Realm.open({
    schema: [UserSchema],
    sync: {
      user: app.currentUser,
      partitionValue: 'Partition',
    },
  });

    try{
        realm.beginTransaction();
    realm.create('USER_SCHEMA', {
          _id: user.id + '12',
          _partition: 'Partition',
          username: 'ShadowBacon',
          vorname: 'Florian',
          nachname: 'Sonntag',
          usertype: '2',
          usergender: 'Männlich',
          useralter: '21',
          bildungsstand: 'Student',
          Arbeit: 'Wirtschaftsinformatik',
          Raucher: 'false',
          veganer: 'false',
          vegetarier: 'false',
          Party: 'false',
    });
    realm.commitTransaction();
    realm.close()

  } catch (err) {
    console.error( err.message);
  }
  ;
} catch (err) {
  console.error( err.message);
}

});

router.get("/updateUser", async function(req,res){
    const user = app.currentUser;

    try {
        const realm = await Realm.open({
            schema:[UserSchema]
        });

        try {
            realm.beginTransaction();

            //console.log(user.id + '2');
            var Nutzer = realm.objects('USER_SCHEMA');
            //var Nutzer2 = realm.objects
            console.log(Nutzer);
            console.log(Nutzer.length);

            realm.commitTransaction();

            /*
            let specnutzer = nutzer.filtered( '_id' + "=" + user.id);
            console.log(specnutzer);
            nutzer.vorname = 'Leon';
            nutzer.nachname = 'Reich';
            */

            realm.close();

        } catch (err) {
            console.error(err.message);
        }
    }catch (err) {
        console.error(err.message);
    }
});

module.exports = router;



let UserSchema = {
    name: "USER_SCHEMA",
    properties: {
        _id: 'string',
        _partition: 'string',
        username: 'string',
        vorname: 'string',
        nachname: 'string',
        usertype: 'string',
        usergender: 'string',
        useralter: 'string',
        bildungsstand: 'string',
        Arbeit: 'string',
        Raucher: 'string',
        veganer: 'string',
        vegetarier: 'string',
        Party: 'string',
    },
    primaryKey: '_id',
};