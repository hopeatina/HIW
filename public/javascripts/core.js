//var app = angular.module('mainApp', []);

//var hiw = require("hiw-api");
//var api = new hiw.API(apiKey);

//app.factory('HIWmethods', function () {

//    var hiwapi = {};

//    hiwapi.getLocales =  hiw.Locale.getAll(api, function(data, response, error) {
//            $scope.locales = data; //Array of Locale
//            //console.log(locales);
//        });
    

//    return hiwapi;
//});


var myapp = angular.module("MyApp", []);

myapp.factory("UserService", function () {
    var users = ["Peter", "Daniel", "Nina"];

    return {
        all: function () {
            return users;
        },
        first: function () {
            return users[0];
        }
    };
});

myapp.controller("MyCtrl", function ($scope, UserService) {
    $scope.users = UserService.all();
});

myapp.controller("AnotherCtrl", function ($scope, UserService) {
    $scope.firstUser = UserService.first();
});

myapp.controller('mainController',
    function ($scope) {

        $scope.loading = true;

        // GET =====================================================================
        // when landing on the page, get all todos and show them
        // use the service to get all the todos
        $scope.test = "Hello world!!!!!!!!!!";
        console.log($scope.test);
        
        $scope.loading = false;
    });