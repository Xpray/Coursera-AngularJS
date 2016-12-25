(
  function() {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunch= '';
        $scope.message = '';
        $scope.color = '';
        $scope.border = '';
        $scope.checkLunch = function() {
          var lunch = $scope.lunch;
          $scope.border = 'solid';
          if (lunch != '') {
            var lunchArray = lunch.split(',');
            var count = 0;
            for(var i = 0; i < lunchArray.length; i++) {
              if (lunchArray[i].trim() != '') {
                count++;
              }
            }
            if (count == 0) {
              $scope.message = 'Please enter data first';
              $scope.color = 'red';
            } else if (count <= 3) {
              $scope.message = 'Enjoy!';
              $scope.color = 'green';
            } else {
              $scope.message = 'Too much!';
              $scope.color = 'green';
            }
          } else {
            $scope.message = 'Please enter data first';
            $scope.color = 'red';
          }
        };
    };


  }
)();
