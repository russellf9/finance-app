/**
 * Created by factornine on 22/06/2015.
 */

angular.module('f9.grid.multiplication')
	.directive('multiplicationCell', MultiplicationCell);

function MultiplicationCell() {

	return {
		controllerAs: 'multiplication',
		controller: function($attrs, $scope) {
			this.x = $scope.$eval($attrs.x);
			this.y = $scope.$eval($attrs.y);
			this.value = this.x * this.y;
		}
	}
}
