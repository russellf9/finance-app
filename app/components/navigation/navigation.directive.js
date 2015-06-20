/**
 * Created by factornine on 14/06/2015.
 */
angular.module('f9.grid.navigation', [])

	.directive('navigation', Navigation);

function Navigation(f9StateService) {
	return {
		restrict: 'A',
		scope: {
			options: '='
		},
		templateUrl: 'components/navigation/navbar.html',
		link: link
	};

	function link(scope) {
		// define list of menu `states` here
		scope.menu = [{
			'title': 'Home',
			'state': 'home'
		}, {
			'title': 'Simple',
			'state': 'simple-example'
		}];

		// conditional logic to define the active menu item
		scope.isActive = function(itemState) {
			var currentState = f9StateService.getStateCurrentName();
			return currentState === itemState;
		};
	}
}