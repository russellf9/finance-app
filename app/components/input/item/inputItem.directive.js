/**
 * Created by factornine on 25/06/2015.
 */
/**
 * Created by factornine on 24/06/2015.
 */

angular.module('f9.shared.input', [])
	.directive('inputItem', InputItem);

function InputItem() {

	return {
		restrict: 'EA',
		transclude: true,
		templateUrl: 'components/input/item/input-item.template.html',
		bindToController: true,
		scope: {
			model: '=',
			name: '@'
		},
		controllerAs: 'input',
		controller: controller
	};

	function controller() {
		var vm = this;

	}
}

