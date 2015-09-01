
/**
 * Module dependencies.
 */

var express = require("express");
var routes = require("./routes");
var http = require("http");
var path = require("path");
var app = express(); // all environments
var hiw = require("hiw-api");
var apiKey = "da45e11d07eb4ec8950afe79a0d76feb";
var api = new hiw.API(apiKey);
app.set("port", process.env.PORT || 7001);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require("stylus").middleware(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
//app.use(require('./public/javascripts/controllers'));

// development only
if ("development" == app.get("env")) {
    app.use(express.errorHandler());
}

app.get("/", routes.index);
app.get("/about", routes.about);
app.get("/contact", routes.contact);
app.get('/index', routes.index2);

http.createServer(app).listen(app.get("port"), function() {
    console.log("Express server listening on port " + app.get("port"));
});