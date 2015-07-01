/**
 * Created by factornine on 27/06/2015.
 */


angular.module('f9.shared.ui.image-circle', [])
	.directive('imageCircle', ImageCircle);

function ImageCircle($timeout) {

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

		vm.onLoad = _onLoad;

		vm.loaded = false;

		// handles the successful loading of the image
		// the $timeout is required to force a digest
		function _onLoad(event)  {
			$timeout(_set, 1);
		}

		// simply sets the `loaded` property
		function _set() {
			vm.loaded = true;
		}
	}
}


