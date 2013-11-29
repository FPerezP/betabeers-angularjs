'user strict';

betabeersControllers.controller('initialCodeCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
  $rootScope.activeTab = 'initialCode';
  $scope.title = 'Nuestro punto de partida';

  $scope.run = function() {
    $scope.getData('/static/dummy.json');
    $scope.getData('/static/dummy1.json');
    $scope.getData('/static/dummy2.json');

    $scope.executed = "Terminé!"
  };
}]);

