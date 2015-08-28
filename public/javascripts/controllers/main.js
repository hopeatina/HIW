angular.module('controllerModule', [])

	// inject the HIWmethods service factory into our controller
	.controller('mainController', ['$scope', function($scope, HIWmethods) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		$scope.test = "Hello world!!!!!!!!!!"
			HIWmethods.getLocales().then(function(data) {
				$scope.locales = {
				    availableOptions: data
		}
				$scope.loading = false;
			});

	}])