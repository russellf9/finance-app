/**
 * Created by factornine on 14/06/2015.
 */
angular.module('f9.grid.navigation', [])

	.directive('navigation', Navigation);

function Navigation(f9StateService) {
	return {
		restrict: 'A',
		scope: {
			options: '=',
			max: '='
		},
		templateUrl: 'components/navigation/navbar.directive.html',
		link: link,
		controller: NavigationController,
		controllerAs: 'vm',
		bindToController: true // because the scope is isolated
	};

	function link(scope) {

		// conditional logic to define the active menu item
		scope.isActive = function(itemState) {
			var currentState = f9StateService.getStateCurrentName();
			return currentState === itemState;
		};
	}


	function NavigationController() {

		var vm = this;

		// define list of menu `states` here
		vm.menu = [{
			'title': 'Home',
			'state': 'home'
		}, {
			'title': 'Simple',
			'state': 'simple-example'
		}, {
			'title': 'Multiplication',
			'state': 'multiplication'
		}, {
			'title': 'Random Person',
			'state': 'random-person'
		},
			{
				'title': 'People',
				'state': 'people'
			}
		];

	}
}