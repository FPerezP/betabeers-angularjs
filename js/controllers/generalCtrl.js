'user strict';

betabeersControllers.controller('generalCtrl', ['$scope', '$http', '$location', '$q', function($scope, $http, $location, $q) {
  $scope.getData = function (url, useCache) {
    var response = {}, config = {},
        deferred = $q.defer();
    useCache = useCache || null;

    if (useCache) {
      config.cache = true;
    }

    $http.get(url, config).
      success(function(data, status, headers, config) {
          deferred.resolve(data);
      }).error(function(data, status, headers, config) {
          deferred.reject('Something was wrong.');
      });

    return deferred.promise;
  }

  var useCache = true;
  $scope.getData('/static/menu.json', useCache).then(
    function(responseData) {
      $scope.menu = responseData.menu;
    }
  );

}]);
