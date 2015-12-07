
MovieApp.controller('AddMoviesController', function($scope, $location, MovieService) {
    
    $scope.movies = MovieService.getMovies();
    
    $scope.addMovie = function() {
        var titleOk = !fieldEmpty($scope.movieTitle);
        var directorOk = !fieldEmpty($scope.movieDirector);
        var releaseOk = !fieldEmpty($scope.movieReleased);
        var descriptionOk = !fieldEmpty($scope.movieDescription);
        
        if(titleOk && directorOk && releaseOk && descriptionOk) {
            var movie = {title: $scope.movieTitle, director: $scope.movieDirector, released: $scope.movieReleased, description: $scope.movieDescription};
            MovieService.addMovie(movie);
            $location.path=('#/movies');
        }
        
    };
    
    function fieldEmpty(field) {
        var fieldEmpty = field === undefined || field === '';
        return fieldEmpty;
    };
});