(function(){
    'use strict';

    angular
        .module('aplication.tweet.controller')
        .controller('TweetController',TweetController);

        TweetController.$inject = ['$routeParams', '$location','Tweets','$http'];

        function TweetController($routeParams, $location,Tweets,$http){
            var vm = this;

            vm.find  = function(){
              vm.tweets = Tweets.query();
            };



           vm.create = function() {
            // Usar los campos form para crear un nuevo objeto $resource tweet
            var tweet = new Tweets({
                mensaje: this.mensaje,

            });

            // Usar el método '$save' de tweet para enviar una petición POST apropiada
            tweet.$save(function(response) {
                // Si un artículo fue creado de modo correcto, redireccionar al usuario a la página del tweet
                $location.path('/tweets');
            }, function(errorResponse) {
                // En otro caso, presentar al usuario el mensaje de error
                vm.error = errorResponse.data.message;
            });
            };



        };

})();