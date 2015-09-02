//var app = angular.module('mainApp', []);
//app.factory('HIWmethods', function() {

//    var hiwapi = {
//        getLocales: hiw.Locale.getAll(api, function(data, response, error) {
//            $scope.factlocales = {
//                availableOptions: data

//            }
//            console.log(data);
//            //Array of Locale
//            return data;
//        })
//    };
//    return hiwapi;
//});

//app.controller('mainController', 
//    function($scope, HIWmethods) {
//        $scope.loading = true;
//        // GET =====================================================================
//        // when landing on the page, get all todos and show them
//        // use the service to get all the todos
//        $scope.test = "Hello world!!!!!!!!!!";
//        console.log($scope.test);
//        HIWmethods.getLocales().then(function(data) {
//            $scope.locales = {
//                availableOptions: data
//            }
//            console.log($scope.locales.availableOptions);
//            //console.log($scope.factlocales.availableOptions);
//            $scope.loading = false;
//        });
//    });

define([], function() {
    var myapp = angular.module("MyApp", []);
    console.log("got into my app");
    return myapp;
});

//var hiw = require("hiw-api");
//var apiKey = "da45e11d07eb4ec8950afe79a0d76feb";
//var api = new hiw.API(apiKey);

//myapp.factory("UserService", function () {
//    var users = ["Peter", "Daniel", "Nina"];
//    //var locales = [];
//    return {
//        all: function() {
//            return users;
//        },
//        first: function() {
//            return users[0];
//        },
//        last: function() {
            
//        }
//    };
//});


//myapp.controller("MyCtrl", function ($scope, UserService) {
//    $scope.users = UserService.all();
//    //$scope.locales = UserService.hiw();
//});

//myapp.controller("YourCtrl", function ($scope, UserService) {
//    $scope.users = UserService.first();
//    //$scope.locales = UserService.hiw();
//});

//myapp.controller("AnotherCtrl", function ($scope, UserService) {
//    $scope.firstUser = UserService.first();
//});