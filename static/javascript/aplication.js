(function () {
  'use strict';

  angular
    .module('application', [
      'application.config',
      'application.auth',
      'application.static',
      'aplication.tweet',
    ]);  

  angular
    .module('application.config', ['ngCookies']);

    angular
    .module('application.auth', []);

    angular
    .module('application.static', []);

    angular
    .module('aplication.tweet', []);
})();
