// Invocar modo JavaScript 'strict'
'use strict';

// Crear el service 'articles'
angular.module('tweet').factory('Tweets', ['$resource', function($resource) {
	// Usar el service '$resource' para devolver un objeto '$resource' article
    return $resource('/api/tweets/:tweetId', {
        tweetId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);