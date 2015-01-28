(function() {
	// Invocar modo JavaScript 'strict'
	'use strict';

	angular
		.module('aplication.tweet.service')
		.factory('Tweets', Tweets);

	Tweets.$inject = ['$resource'];


	function Tweets($resource) {
		return $resource('/api/tweets/:tweetId', {
			tweetId: '@id'
		}, {
			update: {
				method: 'PUT'
			}
		});


	};

})();