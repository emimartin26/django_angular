(function () {
  'use strict';

  angular
    .module('application.static.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider.when('/', {
      controller: 'IndexController',
      controllerAs: 'vm',
      templateUrl: '/static/javascript/static/views/index.html'
    });
  }
})();
