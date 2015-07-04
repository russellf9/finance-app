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
			url: '=',
			onLoadComplete: '&?'
		},
		controllerAs: 'image',
		controller: controller
	};

	function controller($scope) {
		var vm = this;

		// The function evoked by the `f9-image-load` Directive
		vm.onLoad = _onLoad;

		vm.loaded = false;

		// handle any updates to the value of the url
		$scope.$watch(angular.bind(this, _watchUrl), _watchHandler);

		//
		function _watchUrl() {
			return vm.url;
		}

		//
		function _watchHandler(newValue) {
			vm.loaded = vm.url ? true : false;
		}


		// handles the successful loading of the image
		// the $timeout is required to force a digest
		function _onLoad(event) {
			$timeout(angular.noop, 1);

			console.log('ImageCircle::onLoad ', vm);

			// evoke the passed function
			vm.onLoadComplete()();
		}
	}
}


