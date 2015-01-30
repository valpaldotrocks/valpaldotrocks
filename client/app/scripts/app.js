'use strict';
 
var app = angular.module('valpaldotrocksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
 
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/pals', {
      templateUrl: 'views/pals.html',
      controller: 'PalsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
 
app.factory('Pal', ['$resource', function($resource) {
  return $resource('/api/pals/:id.json', null, {
    'update': { method:'PUT' }
  });
}]);
