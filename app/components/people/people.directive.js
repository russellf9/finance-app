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
		controller: PeopleController
	};

	/**
	 * @name PeopleController
	 * @description
	 * @param $timeout
	 * @constructor
	 */
	function PeopleController($timeout) {
		var vm = this;

		vm.loaded = false;

		vm.getRandomPeople = _getRandomPeople;

		vm.onLoad = _onLoad;

		vm.clearData = _clearData;

		// always call on load
		vm.getRandomPeople();



		// sets a flag to hold the `loaded` state
		function _onLoad() {
			vm.loaded = true;
		}

		// Makes the call to create a random person
		function _getRandomPeople() {

			// reset the loaded state so the loading animation knows to show itself
			vm.loaded = false;

			if(vm.person) {
				vm.clearData();
			}

			PeopleService.getRandomPeople().then(function(result) {

				$timeout(_setData, 1000, true, result);

			}, function(error) {
				// TODO
			})
		}

		// Assigns the data to this `View Model` from the Data collection
		function _setData(result) {

			// TODO

		}

		function _clearData() {
			//vm.person = {}; TODO
		}
	}
}

