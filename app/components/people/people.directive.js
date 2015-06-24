/**
 * Created by factornine on 24/06/2015.
 */


angular.module('f9.grid.people', [])
	.directive('people', People);

function People() {

	return {
		restrict: 'EA',
		transclude: true,
		templateUrl: 'components/people/people.template.html',
		// this is new to AngularJS 1.3
		bindToController: true,
		scope: {
		},
		controllerAs: 'ctrl',
		controller: controller
	};

	function controller() {
		var vm = this;

		console.log('People::controller!');
	}
}

