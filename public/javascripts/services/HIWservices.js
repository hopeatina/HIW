var hiw = require("hiw-api");
var api = new hiw.API(apiKey);

angular.module('HIWservices', []).
  factory('HIWmethods', function () {

      var hiwapi = {};

      hiwapi.getLocales = function () {
          return hiw.Locale.getAll(api);
      }

      return hiwapi;
  });