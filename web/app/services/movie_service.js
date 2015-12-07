var FIREBASE_DATA_MOVIES_URL = "https://glowing-fire-520.firebaseio.com/movies";

MovieApp.service('MovieService', function($firebaseArray) {
    
    var firebaseMoviesRef = new Firebase(FIREBASE_DATA_MOVIES_URL);
    var movies = $firebaseArray(firebaseMoviesRef);

    this.getMovies = function() {
        return movies;
    };
    
    this.addMovie = function(movie) {
      movies.$add(movie);  
    };
    
});

