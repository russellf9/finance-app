/**
 * Created by factornine on 24/06/2015.
 */

angular.module('f9.grid.people')
	.service('PeopleService', Service);

function Service($http, $timeout) {

	// 'private'
	var _name = 'Russell';

	var service = {
		getRandomPeople: getRandomPeople
	};

	return service;

	///////////


	function getRandomPeople() {
		return $http.get('http://api.randomuser.me/');
	}

}
