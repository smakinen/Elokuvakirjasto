// Toteuta moduulisi tänne

var MovieApp = angular.module('MovieApp', ['firebase', 'ngRoute']);

//MovieApp.config(function($routeProvider){
//   $routeProvider.when('/', {
//      controller: 'ListMoviesController',
//      templateUrl: 'app/views/movies.html'
//   }); 
//});

MovieApp.config(function($routeProvider) {
   $routeProvider
           .when('/movies', {
               controller: 'ListMoviesController',
               templateUrl: 'app/views/movies.html'
            })
            .when('/movies/new', {
               controller: 'AddMoviesController',
               templateUrl: 'app/views/new_movie.html'
            })
            .when('/', {
               controller: 'ListMoviesController',
               templateUrl: 'app/views/movies.html'
            });
});