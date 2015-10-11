'use strict';

angular.module('dessApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
	$scope.entry={}
  /*  $http.get('/api/entrys').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    }); */

    $scope.postData = function() {
      if(!$scope.entry) {
        return;
      }
      $http.post('/api/entrys', $scope.entry);
      
    };

  });
