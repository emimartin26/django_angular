(function(){
    'use strict';

    angular
        .module('aplication.tweet.controller')
        .controller('TweetController',TweetController);

        TweetController.$inject = ['$routeParams', '$location','Tweets','$http','Auth'];

        function TweetController($routeParams, $location,Tweets,$http,Auth){
            var vm = this;


            vm.find  = function(){
              vm.tweets = Tweets.query();
            };


            vm.findOne = function() {
                vm.tweet = Tweets.get({
                    tweetId: $routeParams.tweetId
                });

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

            vm.update = function() {
                vm.tweet.$update(function() {
                    $location.path('tweets/' + vm.tweet.id);
                }, function(errorResponse) {
                    // En otro caso, presenta al user un mensaje de error
                    vm.error = errorResponse.data.message;
                });
            };

           vm.delete = function(tweet) {
                if (tweet) {
                    tweet.$remove(function() {
                        for (var i in vm.tweets) {
                            if (vm.tweets[i] === tweet) {
                                vm.tweets.splice(i, 1);
                            }
                        }
                        //$location.path('tweets')
                    });
                } else {
                    vm.tweet.$remove(function() {
                        $location.path('/tweets');
                    });
                }
            };

            vm.isOwner = function(owner){
                if(Auth.getUser().username == owner){
                    return true;
                };
                return false;

            };



        };

})();