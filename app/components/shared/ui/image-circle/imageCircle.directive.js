/**
 * Created by factornine on 27/06/2015.
 */


angular.module('f9.shared.ui.image-circle', [])
	.directive('imageCircle', ImageCircle);

function ImageCircle() {

	return {
		restrict: 'EA',
		templateUrl: 'components/shared/ui/image-circle/image-circle.template.html',
		bindToController: true,
		scope: {
			url: '='
		},
		controllerAs: 'image',
		controller: controller
	};

	function controller() {
		var vm = this;

	}
}


