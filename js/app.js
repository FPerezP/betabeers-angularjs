'use strict';

var betabeers = angular.module('betabeers', ['ngRoute', 'betabeersControllers']);

betabeers.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', { templateUrl: 'tpl/overview.html', controller: 'overviewCtrl' }).
    when('/initial-code', { templateUrl: 'tpl/initialCode.html', controller: 'initialCodeCtrl' }).
    when('/timeout', { templateUrl: 'tpl/timeout.html', controller: 'timeoutCtrl' }).
    when('/promises', { templateUrl: 'tpl/promises.html', controller: 'promisesCtrl' }).
    when('/watch', { templateUrl: 'tpl/watch.html', controller: 'watchCtrl' }).
    when('/ng-if', { templateUrl: 'tpl/ngIf.html', controller: 'ngIfCtrl' }).
    when('/cache', { templateUrl: 'tpl/cache.html', controller: 'cacheCtrl' }).
    when('/slide2', { templateUrl: 'tpl/slide2.html' }).
    when('/slide3', { templateUrl: 'tpl/slide3.html' }).
    when('/slide4', { templateUrl: 'tpl/slide4.html' }).
    when('/slide5', { templateUrl: 'tpl/slide5.html' }).
    when('/slide6', { templateUrl: 'tpl/slide6.html' }).
    when('/slide7', { templateUrl: 'tpl/slide7.html' }).
    when('/slide8', { templateUrl: 'tpl/slide8.html' }).
    otherwise({
      redirectTo: '/'
    });
  }
]);

var betabeersControllers = angular.module('betabeersControllers', []);
