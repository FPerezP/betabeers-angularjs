'user strict';

betabeersControllers.controller('timeoutCtrl', ['$scope', '$http', '$rootScope', '$timeout', function($scope, $http, $rootScope, $timeout) {
  $rootScope.activeTab = 'timeout';
  $rootScope.title = 'Y esto afecta al rendimiento?';

  $timeout(function() {
    $scope.run = function() {
      $scope.getData('/static/dummy.json');
      $scope.getData('/static/dummy1.json');
      $scope.getData('/static/dummy2.json');

     $scope.executed = 'Terminé!';
    };
  });
}]);

