(function () {
  'use strict';

  angular
    .module('application.static.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$location', 'Auth'];

  function IndexController($location, Auth) {
    var vm = this;

    vm.users = [];

    activate();

    function activate() {
      if (!Auth.getToken()) {
        $location.path('/login');
      } else {
        $location.path('/');
      }
    }

  }
})();
