
/*
 * GET home page.
 */

var hiw = require("hiw-api");
var apiKey = "da45e11d07eb4ec8950afe79a0d76feb";
var api = new hiw.API(apiKey);
var http = require("http");

exports.index2 = function(req, res) {

    var rawresponse;
    var founderror;
    var indicatorDescription;
    var locales;
    //var allinidcatorsURL = '/Indicators/ { page }?Key= { key }';
    //var filter = new hiw.Filter()
    //    .addEqual(hiw.Locale.Fields.ScriptFullName, "Arkansas");


    hiw.Synchronizer.sync([
        hiw.IndicatorDescription.getByID(279, api, function(data, response, error) {
            indicatorDescription = data;

            //for (var thing in indicatorDescription) {
            //    if (indicatorDescription.hasOwnProperty(thing) && indicatorDescription[thing] === undefined) {
            //    } else {
            //        var obj = indicatorDescription[thing];
            //        console.log(thing + " = " + obj);
            //        //for (var prop in obj) {
            //        //    if (obj.hasOwnProperty(prop)) {
            //        ////        console.log(prop + " = " + obj[prop]);
            //        //    }
            //        //}
            //    }
            //}
            //console.log(thing.fullDescription);
        
            
            //console.log(indicatorDescription.fullDescription);
            //console.log(indicatorDescription);
            title = "Express"; //response: rawresponse, error: founderror

        }),
        hiw.Locale.getAll(api, function(data, response, error) {
            locales = data; //Array of Locale
            for (var thing in locales) {
             
                    var obj = locales[thing].fullName;
                    console.log(thing + " = " + obj);
                    //for (var prop in obj) {
                    //    if (obj.hasOwnProperty(prop)) {
                    ////        console.log(prop + " = " + obj[prop]);
                    //    }
                    //}
                
            }
            console.log(locales.length);
        })
    ], function (data) {
        
    res.render("index", { title: title, data: locales[1].fullName, description: indicatorDescription.fullDescription });
    });

};

exports.index = function (req, res) {
    
    var rawresponse;
    var founderror;
    var indicatorDescription;
    var locales;
    //var allinidcatorsURL = '/Indicators/ { page }?Key= { key }';
    //var filter = new hiw.Filter()
    //    .addEqual(hiw.Locale.Fields.ScriptFullName, "Arkansas");
    res.sendfile('./views/index.html');
    //res.json(locales);

};

exports.about = function (req, res) {

    res.render("about", { title: "About", year: new Date().getFullYear(), message: "Your application description page." });
};

exports.contact = function(req, res) {
    res.render("contact", { title: "Contact", year: new Date().getFullYear(), message: "Your contact page." });
};


GetAllIndicators = hiw.IndicatorDescription(api, function(data, response, error) {

}, 1);