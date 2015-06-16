/**
 * Created by factornine on 14/06/2015.
 */
angular.module('f9.grid.navigation', [])

	.directive('navigation', _navigation);

function _navigation($state) {
	return {
		restrict: 'A',
		scope: {
			options: '='
		},
		templateUrl: 'components/navigation/navbar.html',
		link: function(scope) {

			scope.uiRouterState = $state;

			console.log('nav directive :-)', $state);

			scope.current = $state.current;

			console.log('nav directive current: ', scope.current);

			scope.menu = [{
				'title': 'Home',
				'state': 'home'
			},{
				'title': 'Simple',
				'state': 'simple-example'
			}];

			scope.isActive = function(state) {
				return state === scope.current.name;
			};


		}
	};
}