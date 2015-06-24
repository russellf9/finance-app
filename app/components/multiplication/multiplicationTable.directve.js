/**
 * Created by factornine on 22/06/2015.
 */

angular.module('f9.grid.multiplication', [])
	.directive('multiplicationTable', Multiplication);

function Multiplication() {

	return {
		restrict: 'EA',
		transclude: true,
		templateUrl: 'components/multiplication/multiplication-table-tpl.html',
		// this is new to AngularJS 1.3
		bindToController: true,
		scope: {
			x: '=',
			y: '='
		},
		controllerAs: 'ctrl',
		controller: controller
	};

	function controller() {
		var vm = this;

		vm.x = vm.x || 0;
		vm.y = vm.y || 0;

		var table = vm.rows = [];

		for (var i = 0; i < vm.y; i++) {
			var array = table[i] = [];
			for (var j = 0; j < vm.x; j++) {
				array.push(1);
			}
		}
	}
}

