define(['myapp'], function(myapp) {
    myapp.factory("UserService", function () {
        var users = ["Peter", "Daniel", "Nina"];
        console.log(users);
        //var locales = [];
        return {
            all: function () {
                return users;
            },
            first: function () {
                return users[0];
            },
            last: function () {

            }
        };
    });


    myapp.controller("MyCtrl", function ($scope, UserService) {
        $scope.users = UserService.all();
        //$scope.locales = UserService.hiw();
    });

    myapp.controller("YourCtrl", function ($scope, UserService) {
        $scope.users = UserService.first();
        //$scope.locales = UserService.hiw();
    });

    myapp.controller("AnotherCtrl", function ($scope, UserService) {
        $scope.firstUser = UserService.first();
    });
})