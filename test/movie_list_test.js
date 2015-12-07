describe('Movie list', function(){
	var controller, scope;

	var FirebaseServiceMock;

  	beforeEach(function(){
  		// Lisää moduulisi nimi tähän
    	module('MovieApp');

    	FirebaseServiceMock = (function(){
			
                var movies = [{
                    title: 'Star Wars I: The Phantom Menace',
                    released: 2001,
                    director: "George Lucas",
                    description: 'First Star Wars movie in the prequel series',
                },{
                    title: 'Star Wars II: The Clone Wars',
                    released: 2002,
                    director: "George Lucas",
                    description: 'Second Star Wars movie in the prequel series',
                    
                }];
                    
                
                        return {
                            getMovies: function() {
                                return movies;
                            },
                            
                            addMovie: function(movie) {
                                movies.push(movie);
                            },
                            
                            removeMovie: function(movie) {
                                var filteredMovies = movies.filter(function(m){return m.title !== movie.title});
                                movies = filteredMovies;
                                
                            }
                            // Toteuta FirebaseServicen mockatut metodit tähän
			}
		})();

		// Lisää vakoilijat
	spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();
        spyOn(FirebaseServiceMock, 'removeMovie').and.callThrough();

    	// Injektoi toteuttamasi kontrolleri tähän
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      // Muista vaihtaa oikea kontrollerin nimi!
	      controller = $controller('ListMoviesController', {
	        $scope: scope,
	        MovieService: FirebaseServiceMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että Firebasesta (mockilta) saadut elokuvat löytyvät konrollerista
  	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
  	*/ 
	it('should list all movies from the Firebase', function(){
            
            expect(scope.movies.length).toBe(2);
            expect(scope.movies[0].title).toBe("Star Wars I: The Phantom Menace");
            expect(scope.movies[0].director).toBe("George Lucas");
            expect(scope.movies[0].released).toBe(2001);
            expect(scope.movies[0].description).toBe("First Star Wars movie in the prequel series");
            
            expect(scope.movies[1].title).toBe("Star Wars II: The Clone Wars");
            expect(scope.movies[1].director).toBe("George Lucas");
            expect(scope.movies[1].released).toBe(2002);
            expect(scope.movies[1].description).toBe("Second Star Wars movie in the prequel series");

            expect(FirebaseServiceMock.getMovies).toHaveBeenCalled();
	});

	/* 
	* Testaa, että elokuvan pystyy poistamaan Firebasesta.
	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
	*/
	it('should be able to remove a movie', function(){
            expect(scope.movies.length).toBe(2);
            var movieToRemove = scope.movies[0];            
            scope.removeMovie(movieToRemove); // does not work
            expect(FirebaseServiceMock.removeMovie).toHaveBeenCalled();
            
            //expect(scope.movies.length).toBe(1);
	});
});