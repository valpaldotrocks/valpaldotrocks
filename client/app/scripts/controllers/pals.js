'use strict';
 
angular.module('valpaldotrocksApp')
  .controller('PalsCtrl', ['$scope', 'Pal', function ($scope, Pal) {
    $scope.pals = Pal.query();
  }]);