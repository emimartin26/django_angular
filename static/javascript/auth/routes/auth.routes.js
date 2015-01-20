(function () {
  'use strict';

  angular
    .module('application.auth.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider.when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/javascript/auth/views/login.html'
    });
  }
})();
