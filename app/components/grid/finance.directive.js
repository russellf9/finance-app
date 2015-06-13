/**
 * Created by russell@factornine.co.uk on 13/06/2015.
 */
angular.module('f9.grid')

	.directive('grid', _grid);

function _grid() {
	return {
		restrict: 'A',
		scope: {
			options: '='
		},
		templateUrl: 'components/grid/grid.html'
	};
}