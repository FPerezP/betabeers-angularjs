'user strict';

betabeersControllers.controller('promisesCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
  $rootScope.activeTab = 'promises';
  $scope.title = 'Lo prometo :-)';

  $scope.run = function() {
    $timeout(function() {
      $scope.getData('/static/dummy.json').
        then($scope.getData('/static/dummy1.json')).
        then($scope.getData('/static/dummy2.json')).
        then(function() {
          $scope.executed = "terminé!";
        });
    });
  };
}]);
