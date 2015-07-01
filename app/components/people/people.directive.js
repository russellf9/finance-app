/**
 * Created by factornine on 24/06/2015.
 */


angular.module('f9.grid.people', [])
	.directive('people', People);

function People($filter, PeopleService, RandomDataService) {

	return {
		restrict: 'EA',
		transclude: true,
		templateUrl: 'components/people/people.template.html',
		// this is new to AngularJS 1.3
		// for the `scope` properties...
		bindToController: true,
		scope: {
		},
		controllerAs: 'people',
		controller: controller
	};

	function controller() {
		var vm = this;

		vm.getRandomPerson = _getRandomPerson;

		// always call on load
		vm.getRandomPerson();

		// Makes the call to create a random person
		function _getRandomPerson() {
			PeopleService.getRandomPerson().then(function(result) {

				vm.person = result.data.results[0].user;

				// adjust the data
				vm.person.firstName = $filter('capitalizeAllWords')(vm.person.name.first);
				vm.person.secondName = $filter('capitalizeAllWords')(vm.person.name.last);

				vm.person.fullName = vm.person.firstName + ' ' + vm.person.secondName;

				vm.person.mobileNumber = RandomDataService.getMobileNumber();

			}, function(error) {
				// TODO
			})
		}
	}
}

