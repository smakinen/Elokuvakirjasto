
MovieApp.controller('ListMoviesController', function($scope, MovieService) {
    
    $scope.movies = MovieService.getMovies();
        
});


