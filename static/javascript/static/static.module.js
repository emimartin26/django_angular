(function () {
  'use strict';

  angular
    .module('application.static', [
      'application.static.controllers',
      'application.static.routes',
    ]);

  angular
    .module('application.static.controllers', []);

  angular
    .module('application.static.routes', ['ngRoute']);
})();
