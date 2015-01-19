// Invocar modo JavaScript 'strict'
'use strict';

// Crear el controller 'tweet'
angular.module('tweet').controller('TweetController', ['$scope', '$routeParams', '$location','Tweets',
    function($scope, $routeParams, $location,Tweets) {


// Crear un nuevo método controller para recuperar una lista de tweets
        $scope.find = function() {
            // Usar el método 'query' de tweet para enviar una petición GET apropiada
            $scope.tweets = Tweets.query();
        };




    }
]);