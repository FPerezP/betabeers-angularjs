'user strict';

betabeersControllers.controller('ngIfCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
  $rootScope.activeTab = 'ng-if';
  $scope.title = 'Showing or not showing ;-)';

  $scope.code = '<li ng-repeat="item in items">\n';
  $scope.code += '        <p> {{ item.title }} </p>\n';
  $scope.code += '        <button ng-click="item.showDetails = !item.showDetails">\n';
  $scope.code += '          Show details\n';
  $scope.code += '        </buttons>\n';
  $scope.code += '        <div ng-if="item.showDetails">\n';
  $scope.code += '            {{item.details}}\n';
  $scope.code += '        </div>\n';
  $scope.code += '    </li>\n';
}]);
