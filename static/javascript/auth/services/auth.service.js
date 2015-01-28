(function () {
  'use strict';

  angular
    .module('application.auth.services')
    .factory('Auth', Auth);

  Auth.$inject = ['$http', '$window','$location'];

  function Auth($http, $window,$location) {
    var state = true;


    var Auth = {
      deleteToken: deleteToken,
      getToken: getToken,
      login: login,
      logout: logout,
      setToken: setToken,
      activate: activate,
      getUser: getUser,
      setUser: setUser,
      deleteUser:deleteUser
    };

    return Auth;


    function deleteToken() {
      $window.localStorage.removeItem('token');
    };

    function getToken() {
      return $window.localStorage.getItem('token');
    };

    function setToken(token) {
      $window.localStorage.setItem('token', token);
    };

    function getUser(){
        var user = JSON.parse($window.localStorage.getItem('user'));
        if (user){
            return user;
        };

        return {"username": "Anonimo", "email": "Anonimo"};

    };

    function setUser(user){
        user = JSON.stringify(user);
        $window.localStorage.setItem('user',user);
    };

    function deleteUser(){
        $window.localStorage.removeItem('user');
    };


    function logout() {
      Auth.deleteToken();
      Auth.deleteUser();
      $window.location = '/';
    };


    function login(username, password) {
      return $http.post('/api-token-auth/', {
        username: username, password: password
      }).then(loginSuccessFn, loginErrorFn);

      function loginSuccessFn(data, status, headers, config) {
        if (data.data.token) {
          Auth.setToken(data.data.token);
          Auth.setUser(data.data.user);
        }

         $window.location = '/';
      };

      function loginErrorFn(data, status, headers, config) {
        console.error(data);
      }
    };

    function activate() {
      if (!Auth.getToken()) {
        $location.path('/login');
      }else {
        $location.path('/');
      }
    };


  }
})();
