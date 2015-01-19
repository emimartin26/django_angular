angular.module('example').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '/static/app/example/view.html',
      controller  : 'ExampleController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);