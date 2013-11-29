'user strict';

betabeersControllers.controller('cacheCtrl', ['$scope', '$http', '$rootScope', '$timeout', function($scope, $http, $rootScope, $timeout) {
  $rootScope.activeTab = 'cache';
  $scope.title = 'Una y no más!';

  $scope.run = function() {
    var useCache = true;
    $timeout(function() {
      $scope.getData('/static/dummy.json', useCache).
        then($scope.getData('/static/dummy1.json')).
        then($scope.getData('/static/dummy2.json', useCache)).
        then(function() {
          $scope.executed = "Terminé!"
        });
      });
    };
}]);
