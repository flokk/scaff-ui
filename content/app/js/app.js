//= stub vendor.js
//= require_tree .

angular.module("{{project}}", [
  "{{project}}.controllers",
  "{{project}}.directives",
  "{{project}}.filters",
  "{{project}}.services"
]).config([
  '$routeProvider',
  '$locationProvider',

  function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/",{
        templateUrl: asset("index.html"),
        controller: "IndexController"
      })
      .otherwise({
        templateUrl: asset("404.html")
      });

    $locationProvider.html5Mode(true);
  }

]);