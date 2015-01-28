(function () {
  'use strict';

  angular
    .module('aplication.tweet.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider.when('/tweets', {
      controller: 'TweetController',
      controllerAs: 'vm',
      templateUrl: '/static/javascript/tweet/views/tweet-list.html'
    }).
    when('/tweets/create', {
            controller: 'TweetController',
            controllerAs: 'vm',
			templateUrl: '/static/javascript/tweet/views/tweet-create.html'
	}).
	when('/tweets/:tweetId', {
	        controller: 'TweetController',
            controllerAs: 'vm',
			templateUrl: '/static/javascript/tweet/views/tweet-view.html'
	}).
	when('/tweets/:tweetId/edit', {
			controller: 'TweetController',
            controllerAs: 'vm',
			templateUrl: '/static/javascript/tweet/views/tweet-edit.html'
	});;
  }
})();
