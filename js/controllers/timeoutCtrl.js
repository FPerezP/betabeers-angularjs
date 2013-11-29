'user strict';

betabeersControllers.controller('timeoutCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
  $rootScope.activeTab = 'timeout';

  $scope.run = function() {
    $scope.getData('/static/dummy.json');
    $scope.getData('/static/dummy.json');
    $scope.getData('/static/dummy.json');
    $scope.getData('/static/dummy.json');
    $scope.getData('/static/dummy.json');
    $scope.getData('/static/dummy.json');
  };
}]);

