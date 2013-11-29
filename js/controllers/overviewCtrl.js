'user strict';

betabeersControllers.controller('overviewCtrl', ['$scope', '$http', '$rootScope', '$timeout', function($scope, $http, $rootScope, $timeout) {
  $rootScope.activeTab = 'overview';

  $timeout(function() {
  $scope.getData('/static/dummy.json');
  $scope.getData('/static/dummy.json');
  $scope.getData('/static/dummy.json');
  $scope.getData('/static/dummy.json');
  $scope.getData('/static/dummy.json');
  $scope.getData('/static/dummy.json');
 });
}]);

