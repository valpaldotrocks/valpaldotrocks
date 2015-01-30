'use strict';

var app = angular.module('valpaldotrocksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-token-auth'
  ]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/sign_in', { templateUrl: 'views/user_sessions/new.html',
      controller: 'UserSessionsCtrl' })
    .when('/sign_up', { templateUrl: 'views/user_registrations/new.html',
      controller: 'UserRegistrationsCtrl' })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/pals', {
      templateUrl: 'views/pals.html',
      controller: 'PalsCtrl',
      resolve: { auth: ['$auth', function($auth) { return $auth.validateUser(); }] }

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

app.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('auth:login-success', function() { $location.path('/'); });
}]);
