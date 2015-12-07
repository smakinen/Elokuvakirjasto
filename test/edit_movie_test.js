describe('Edit movie', function(){
	var controller, scope;

	var FirebaseServiceMock, RouteParamsMock;

  	beforeEach(function(){
  		// Lisää moduulisi nimi tähän
    	module('MovieApp');

    	FirebaseServiceMock = (function(){
			return {
				// Toteuta FirebaseServicen mockatut metodit tähän
			}
		})();

		RouteParamsMock = (function(){
			return {
				// Toteuta mockattu $routeParams-muuttuja tähän
			}
		});

		// Lisää vakoilijat
	    // spyOn(FirebaseServiceMock, 'jokuFunktio').and.callThrough();

    	// Injektoi toteuttamasi kontrolleri tähän
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      // Muista vaihtaa oikea kontrollerin nimi!
	      controller = $controller('MyAwesomeController', {
	        $scope: scope,
	        MovieService: FirebaseServiceMock,
	        $routeParams: RouteParamsMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että muokkauslomakkeen tiedot täytetään muokattavan elokuvan tiedoilla.
  	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
  	*/
  	it('should fill the edit form with the current information about the movie', function(){
  		//expect(true).toBe(false);
  	})

  	/* 
  	* Testaa, että käyttäjä pystyy muokkaamaan elokuvaa, jos tiedot ovat oikeat
	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
	*/
	it('should be able to edit a movie by its name, director, release date and description', function(){
		//expect(true).toBe(false);
	});

	/*
	* Testaa, ettei käyttäjä pysty muokkaaman elokuvaa, jos tiedot eivät ole oikeat
	* Testaa myös, että Firebasea käyttävästä palvelusta ei kutsuta muokkaus-funktiota,
  	* käyttämällä not.toBeCalled-oletusta.
	*/
	it('should not be able to edit a movie if its name, director, release date or description is empty', function(){
		//expect(true).toBe(false);
	});
});