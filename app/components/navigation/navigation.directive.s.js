/**
 * Created by factornine on 14/06/2015.
 */
angular.module('f9.grid.navigation', [])

	.directive('navigation', _navigation);

function _navigation() {
	return {
		restrict: 'A',
		scope: {
			options: '='
		},
		templateUrl: 'components/navigation/navbar.html',
		link: function(scope, $location) {

			scope.menu = [{
				'title': 'Home',
				'link': '/'
			},{
				'title': 'Simple',
				'link': '/simple-example'
			}];

			scope.isActive = function(route) {
				//return route === $location.path();
			};


		}
	};
}