(function () {
  'use strict';

  angular
    .module('application.config')
    .config(config)
    .run([
        '$http',
        '$cookies',
        function($http, $cookies) {
            $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    }]);

  config.$inject = ['$httpProvider', '$locationProvider','$interpolateProvider'];

  function config($httpProvider, $locationProvider,$interpolateProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
    $locationProvider.hashPrefix('!');
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  };

})();

