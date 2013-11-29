'user strict';

betabeersControllers.controller('watchCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
  $rootScope.activeTab = 'watch';
  $scope.title = 'Te estoy observando... ¬_¬';
  $scope.police = 'Todo en orden!';
  $scope.count = 0;
  $scope.executed = 'Viendo Starwars :)';

  $scope.$watch('executed', function() {
    $scope.count++;
    if ($scope.count < 5) {
      $scope.police = 'Se ha cambiado ' + $scope.count + ' veces';
    }
    else {
      $scope.police = 'No tienes nada mejor que hacer?';
    }
  });

  $scope.run = function() {
      $scope.executed = ':-O! Run me ha cambiado(' + $scope.count + ')!';
  };
}]);
