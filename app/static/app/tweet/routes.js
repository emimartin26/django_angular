angular.module('tweet').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/tweets', {
      templateUrl: '/static/app/tweet/view.html',
      controller  : 'TweetController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);