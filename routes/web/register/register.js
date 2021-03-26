var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    res.render("register/registerchoose");
});

router.get("/WGReg",function(req,res){
    res.render("register/registerWG/WGRegister");
});

router.post("/WGReg", function(req,res,next){
    var Straße = req.body.RegWStrasse;
    var Nr = req.body.RegWNr;
    var Stadt = req.body.RegWStadt;
    var PLZ = req.body.RegWPLZ;
    var Beschreibung = req.body.RegWBeschreibung;

    var jsonWG = {
        strasse: Straße,
        hausnummer:Nr,
        ort:Stadt,
        plz:PLZ,
        beschreibung:Beschreibung
    }

    res.render("register/registerWG/WGregisterAngWG");

});

router.get("/WgRegEnd", function(req,res){
    res.render("register/registerWG/WGregisterReg");
});

router.post("/WGRegEnd", function(req,res,next){
    var email = req.body.RegWEmail;
    var passwort = req.body.RegWPasswort;
    var passwortwdhl = reg.body.RegWPasswortWdhl;

    res.render("home/WGHome");
});

router.get("/WGregWG",function(req,res){
    res.render("register/registerWG/WGregisterAngWG");
});

router.post("/WGRegWG", function(req,res,next){
    var Vorname = req.body.RegWMGVorname;
    var Nachname = req.body.RegWMGNachname;
    var Alter = req.body.RegWMGAlter;

    var jsonMittbewohner = {
        vorname:Vorname,
        nachname:Nachname,
        alter:Alter,
    }

    res.render("register/registerWG/WGregisterAngWM");
});

router.get("/WGregWM",function(req,res){
    res.render("register/registerWG/WGregisterAngWM");
})

router.post("/WGRegWM", function(req,res,next){
    var Gender = req.body.WGender;
    var Raucher = req.body.WRaucher;
    var Ernaehrung = req.body.WErnaehrung;
    var Taetigkeit = req.body.WTaetigkeit;
    var Politik = req.body.WPolitges;

    switch(Gender) {
        case "1":
            Gender = "m";
            break;
        case "2":
            Gender = "w";
            break;
        case "3":
            Gender = "d";
            break;
        default:
            Gender = null;
            break;
    }

    if(Raucher != "Raucher"){
        Raucher = "Nichtraucher";
    }

    switch(Ernaehrung) {
        case "1":
            Ernaehrung = "vegetarisch";
            break;
        case "2":
            Ernaehrung = "vegan";
            break;
        case "3":
            Ernaehrung = "omnivor";
            break;
        default:
            Ernaehrung = null;
            break;
    }

    switch(Taetigkeit) {
        case "1":
            Taetigkeit = "Student";
            break;
        case "2":
            Taetigkeit = "Schüler";
            break;
        case "3":
            Taetigkeit = "Azubi";
            break;
        case "4":
            Taetigkeit = "Praktikant";
            break;
        case "5":
            Taetigkeit = "arbeitslos";
            break;
        case "6":
            Taetigkeit = "berufstätig";
            break;
        default:
            Taetigkeit = null;
            break;
    }

    switch(Politik) {
        case "1":
            Politik = "links";
            break;
        case "2":
            Politik = "rechts";
            break;
        case "3":
            Politik = "konservativ";
            break;
        case "4":
            Politik = "grün";
            break;
        case "5":
            Politik = "liberal";
            break;
        case "6":
            Politik = "unpolitisch";
            break;
        default:
            Politik = null;
            break;
    }

    var HB = req.body.Sbs;
    var HV = req.body.Svs;
    var HL = req.body.Sls;
    var HS = req.body.Sst;
    var HR = req.body.Srn;
    var HF = req.body.Sfg;
    var HM = req.body.Smz;

    if(HB != 1){
        HB = 0;
    }else{
        HB = 1;
    }

    if(HV != 1){
        HV = 0;
    }else{
        HV = 1;
    }

    if(HL != 1){
        HL = 0;
    }else{
        HL = 1;
    }

    if(HS != 1){
        HS = 0;
    }else{
        HS = 1;
    }

    if(HR != 1){
        HR = 0;
    }else{
        HR = 1;
    }

    if(HF != 1){
        HF = 0;
    }else{
        HF = 1;
    }

    if(HM != 1){
        HM = 0;
    }else{
        HM = 1;
    }

    //Interessen
    var IPo = req.body.Wpo;
    var IK = req.body.Wk;
    var IN = req.body.Wn;
    var IT = req.body.Wt;
    var ISp = req.body.Wsp;

    if(IPo != 1){
        IPo = 0;
    }else{
        IPo = 1;
    }

    if(IK != 1){
        IK = 0;
    }else{
        IK = 1;
    }

    if(IN != 1){
        IN = 0;
    }else{
        IN = 1;
    }

    if(IT != 1){
        IT = 0;
    }else{
        IT = 1;
    }

    if(ISp != 1){
        ISp = 0;
    }else{
        ISp = 1;
    }

var jsonMatchSchema = {
    "geschlecht":Gender,
    "alter":Alter,
    "raucher": Raucher,
    "ernaehrung":Ernaehrung,
    "taetigkeit":Taetigkeit,
    "politischeGesinnung": Politik,
    "hobbies":{
        "brettspiele":HB,
        "videospiele":HV,
        "lesen":HL,
        "sport":HS,
        "reisen":HR,
        "feiernGehen":HF,
        "musizieren":HM,
    },
    "interessen":{
        "politik":IPo,
        "kultur":IK,
        "naturwissenschaften":IN,
        "technik":IT,
        "sport":ISp
    }
}

    console.log(jsonMatchSchema);
    res.render("register/registerWG/WGregisterReg");

});



router.get("/SReg", function(req,res){
    res.render("register/registerSuchender/SuchenderStart");
});

router.post("/SReg", function(req,res,next){
    var Vorname = req.body.RegSVorname;
    var Nachname = req.body.RegSNachname;
    var Alter = req.body.SAlter;

    var Gender = req.body.SGender;
    var Raucher = req.body.SRaucher;
    var Ernaehrung = req.body.SErnaehrung;
    var Taetigkeit = req.body.STaetigkeit;
    var Politik = req.body.SPolitges;

    switch(Gender) {
        case "1":
            Gender = "m";
            break;
        case "2":
            Gender = "w";
            break;
        case "3":
            Gender = "d";
            break;
        default:
            Gender = null;
            break;
    }

    if(Raucher != "Raucher"){
        Raucher = "Nichtraucher";
    }

    switch(Ernaehrung) {
        case "1":
            Ernaehrung = "vegetarisch";
            break;
        case "2":
            Ernaehrung = "vegan";
            break;
        case "3":
            Ernaehrung = "omnivor";
            break;
        default:
            Ernaehrung = null;
            break;
    }

    switch(Taetigkeit) {
        case "1":
            Taetigkeit = "Student";
            break;
        case "2":
            Taetigkeit = "Schüler";
            break;
        case "3":
            Taetigkeit = "Azubi";
            break;
        case "4":
            Taetigkeit = "Praktikant";
            break;
        case "5":
            Taetigkeit = "arbeitslos";
            break;
        case "6":
            Taetigkeit = "berufstätig";
            break;
        default:
            Taetigkeit = null;
            break;
    }

    switch(Politik) {
        case "1":
            Politik = "links";
            break;
        case "2":
            Politik = "rechts";
            break;
        case "3":
            Politik = "konservativ";
            break;
        case "4":
            Politik = "grün";
            break;
        case "5":
            Politik = "liberal";
            break;
        case "6":
            Politik = "unpolitisch";
            break;
        default:
            Politik = null;
            break;
    }

    var HB = req.body.Sbs;
    var HV = req.body.Svs;
    var HL = req.body.Sls;
    var HS = req.body.Sst;
    var HR = req.body.Srn;
    var HF = req.body.Sfg;
    var HM = req.body.Smz;

    if(HB != 1){
        HB = 0;
    }else{
        HB = 1;
    }

    if(HV != 1){
        HV = 0;
    }else{
        HV = 1;
    }

    if(HL != 1){
        HL = 0;
    }else{
        HL = 1;
    }

    if(HS != 1){
        HS = 0;
    }else{
        HS = 1;
    }

    if(HR != 1){
        HR = 0;
    }else{
        HR = 1;
    }

    if(HF != 1){
        HF = 0;
    }else{
        HF = 1;
    }

    if(HM != 1){
        HM = 0;
    }else{
        HM = 1;
    }

    //Interessen
    var IPo = req.body.Spo;
    var IK = req.body.Sk;
    var IN = req.body.Sn;
    var IT = req.body.St;
    var ISp = req.body.Ssp;

    if(IPo != 1){
        IPo = 0;
    }else{
        IPo = 1;
    }

    if(IK != 1){
        IK = 0;
    }else{
        IK = 1;
    }

    if(IN != 1){
        IN = 0;
    }else{
        IN = 1;
    }

    if(IT != 1){
        IT = 0;
    }else{
        IT = 1;
    }

    if(ISp != 1){
        ISp = 0;
    }else{
        ISp = 1;
    }

    var jsonMatchSchema = {
        "geschlecht":Gender,
        "alter":Alter,
        "raucher": Raucher,
        "ernaehrung":Ernaehrung,
        "taetigkeit":Taetigkeit,
        "politischeGesinnung": Politik,
        "hobbies":{
            "brettspiele":HB,
            "videospiele":HV,
            "lesen":HL,
            "sport":HS,
            "reisen":HR,
            "feiernGehen":HF,
            "musizieren":HM,
        },
        "interessen":{
            "politik":IPo,
            "kultur":IK,
            "naturwissenschaften":IN,
            "technik":IT,
            "sport":ISp
        }
    }

    var jsonUserSchema = {
        "vorname":Vorname,
        "nachname":Nachname,
        "matchingKriterien": jsonMatchSchema
    }

    console.log(jsonUserSchema);

    res.render("register/registerSuchender/SuchenderReg");
});

router.get("/SRegEnd", function(req,res){
    res.render("register/registerSuchender/SuchenderReg");
});

router.post("/SRegEnd", function(req,res,next){
    var email = req.body.SRegEmail;
    var passwort = req.body.SRegPasswort;
    var passwortwdhl = req.body.SRegPasswortWdhl;

    res.render("home/SHome");
});

module.exports = router;