(function(){
'use strict';

angular.module('aplication.tweet', [
    'aplication.tweet.controller',
    'aplication.tweet.service',
    'aplication.tweet.routes',
]);

angular.module('aplication.tweet.controller',[]);

angular.module('aplication.tweet.service',['ngResource']);

angular.module('aplication.tweet.routes',['ngRoute']);


})();