
MovieApp.controller('AddMoviesController', function($scope, $location, MovieService) {
        
    $scope.addMovie = function() {
        var titleOk = !fieldEmpty($scope.movie.title);
        var directorOk = !fieldEmpty($scope.movie.director);
        var releaseOk = !fieldEmpty($scope.movie.released);
        var descriptionOk = !fieldEmpty($scope.movie.description);
        
        if(titleOk && directorOk && releaseOk && descriptionOk) {
            var movie = {title: $scope.movie.title, director: $scope.movie.director, released: $scope.movie.released, description: $scope.movie.description};
            MovieService.addMovie(movie);
            $location.path=('#/movies');
        }
        
    };
    
    function fieldEmpty(field) {
        var fieldEmpty = field === undefined || field === '';
        return fieldEmpty;
    };
});