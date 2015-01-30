'use strict';
angular.module('valpaldotrocksApp')
  .controller('UserRegistrationsCtrl', ['$scope', '$location', '$auth', function ($scope, $location, $auth) {

    $scope.$on('auth:registration-email-error', function(ev, reason) {
      console.log("test", ev, reason);
      $scope.error = reason.errors.full_messages.join();
    });

    $scope.handleRegBtnClick = function () {
      $auth.submitRegistration($scope.registrationForm).then(function () {
        $auth.submitLogin({
          email: $scope.registrationForm.email,
          password: $scope.registrationForm.password
        });
      });

    };

  }]);
