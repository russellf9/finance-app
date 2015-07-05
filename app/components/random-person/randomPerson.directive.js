/**
 * Created by factornine on 24/06/2015.
 *
 * @description An Angular Directive which displays a random person
 * @name randomPerson
 *
 * @usage
 * <pre>
 *   <random-person class="people-container center-block"></random-person>
 * </pre>
 */


angular.module('f9.grid.random-person', [])
	.directive('randomPerson', RandomPerson);

function RandomPerson($filter, RandomPersonService, RandomDataService) {

	return {
		restrict: 'EA',
		transclude: true,
		templateUrl: 'components/random-person/random-person.template.html',
		// this is new to AngularJS 1.3
		// for the `scope` properties...
		bindToController: true,
		scope: {
		},
		controllerAs: 'people',
		controller: RandomPersonController
	};

	/**
	 * @name RandomPersonController
	 * @description
	 * @param $timeout
	 * @constructor
	 */
	function RandomPersonController($timeout) {
		var vm = this;

		vm.loaded = false;

		vm.getRandomPerson = _getRandomPerson;

		vm.onLoad = _onLoad;

		vm.clearData = _clearData;

		// always call on load
		vm.getRandomPerson();



		// sets a flag to hold the `loaded` state
		function _onLoad() {
			vm.loaded = true;
		}

		// Makes the call to create a random person
		function _getRandomPerson() {

			// reset the loaded state so the loading animation knows to show itself
			vm.loaded = false;

			if(vm.person) {
				vm.clearData();
			}

			RandomPersonService.getRandomPerson().then(function(result) {

				$timeout(_setData, 1000, true, result);

			}, function(error) {
				// TODO
			})
		}

		// Assigns the data to this `View Model` from the Data collection
		function _setData(result) {

			vm.person = result.data.results[0].user;

			// adjust the data
			vm.person.firstName = $filter('capitalizeAllWords')(vm.person.name.first);
			vm.person.secondName = $filter('capitalizeAllWords')(vm.person.name.last);

			vm.person.fullName = vm.person.firstName + ' ' + vm.person.secondName;

			vm.person.mobileNumber = RandomDataService.getMobileNumber();
		}

		function _clearData() {
			vm.person = {};
		}
	}
}

