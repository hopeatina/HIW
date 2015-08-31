var app = angular.module('mainApp', []);

var hiw = require("hiw-api");
var api = new hiw.API(apiKey);

app.factory('HIWmethods', function () {

    var hiwapi = {};

    hiwapi.getLocales = function () {
        return hiw.Locale.getAll();
    }

    return hiwapi;
});

app.controller('mainController', 
    function($scope, HIWmethods, api) {
        
        $scope.loading = true;

        // GET =====================================================================
        // when landing on the page, get all todos and show them
        // use the service to get all the todos
        $scope.test = "Hello world!!!!!!!!!!";
        console.log($scope.test);
        HIWmethods.getLocales(api).then(function(data) {
            $scope.locales = {
                availableOptions: data
            }
            console.log($scope.locales.availableOptions);
            $scope.loading = false;
        });


    });



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