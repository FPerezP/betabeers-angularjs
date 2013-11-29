'user strict';

betabeersControllers.controller('watchCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
  $rootScope.activeTab = 'watch';
  $scope.title = 'Te estoy observando... ¬_¬';

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
