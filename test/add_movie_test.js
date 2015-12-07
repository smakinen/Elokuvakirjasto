describe('Add movie', function(){
	var controller, scope;

	var FirebaseServiceMock;

  	beforeEach(function(){
  		// Lisää moduulisi nimi tähän
    	module('MovieApp');

    	FirebaseServiceMock = (function(){
			
                var movies = [{
                    title: 'Star Wars I: The Phantom Menace',
                    released: '2001',
                    director: "George Lucas",
                    description: 'First Star Wars movie in the prequel series',
                },{
                    title: 'Star Wars II: The Clone Wars',
                    released: '2002',
                    director: "George Lucas",
                    description: 'Second Star Wars movie in the prequel series',
                    
                }];
                    
                
                        return {
                            getMovies: function() {
                                return movies;
                            },
                            
                            addMovie: function(movie) {
                                movies.push(movie);
                            }
                            // Toteuta FirebaseServicen mockatut metodit tähän
			}
		})();

		// Lisää vakoilijat
            spyOn(FirebaseServiceMock, 'addMovie').and.callThrough();

    	// Injektoi toteuttamasi kontrolleri tähän
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      // Muista vaihtaa oikea kontrollerin nimi!
	      controller = $controller('AddMoviesController', {
	        $scope: scope,
	        MovieService: FirebaseServiceMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että käyttäjä pystyy lisäämään elokuvan oikeilla tiedoilla.
  	* Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
  	* on kutsutta oikeaa funktiota lisäämällä siihen vakoilijan ja käyttämällä
  	* toBeCalled-oletusta.
	*/
	it('should be able to add a movie by its name, director, release date and description', function(){
            
            expect(scope.movies.length).toBe(2);
            
            scope.movieTitle = "Star Wars III: The Revenge of the Sith";
            scope.movieDirector = "George Lucas";
            scope.movieReleased = 2007;
            scope.movieDescription = "Third Star Wars movie in the prequel series";
            
            scope.addMovie();
            
            expect(scope.movies.length).toBe(3);
            expect(scope.movies[2].title).toBe("Star Wars III: The Revenge of the Sith");
            expect(scope.movies[2].director).toBe("George Lucas");
            expect(scope.movies[2].released).toBe(2007);
            expect(scope.movies[2].description).toBe("Third Star Wars movie in the prequel series");
            
            expect(FirebaseServiceMock.addMovie).toHaveBeenCalled();
            
	});

	/*	
	* Testaa, ettei käyttäjä pysty lisäämään elokuvaa väärillä tiedoilla.
	* Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
	* EI kutsuta funktiota, joka hoitaa muokkauksen. Voit käyttää siihen
	* not.toBeCalled-oletusta (muista not-negaatio!).
	*/
	it('should not be able to add a movie if its name, director, release date or description is empty', function(){

            expect(scope.movies.length).toBe(2);
 
            // should not be possible to add movie without title
            scope.movieTitle = "";
            scope.movieDirector = "George Lucas";
            scope.movieReleased = 2007;
            scope.movieDescription = "Third Star Wars movie in the prequel series";
            
            scope.addMovie();
           
            expect(scope.movies.length).toBe(2);
            
            expect(FirebaseServiceMock.addMovie).not.toHaveBeenCalled();
	});
});