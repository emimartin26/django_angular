var mainApplicationModuleName = 'django_angular';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource','ngCookies','ngRoute','example','tweet']);


mainApplicationModule.config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);

mainApplicationModule.config([
    '$httpProvider',
    '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }]).
    run([
    '$http',
    '$cookies',
    function($http, $cookies) {
        $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    }]);

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});