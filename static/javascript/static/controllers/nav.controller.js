(function () {
  'use strict';

  angular
    .module('application.static.controllers')
    .controller('NavController', NavController);

  NavController.$inject = ['Auth'];

  function NavController(Auth) {
    var vm = this;

    vm.isLoggedIn = !!Auth.getToken();
    vm.logout = logout;


    function logout() {
      Auth.logout();
    }


  };
})();
