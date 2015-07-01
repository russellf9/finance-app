/**
 * Created by factornine on 28/06/2015.
 *
 * @name f9ImageLoad
 * @description A wrapper for the `img` load Event
 * passes the load event success to an interested actor
 *
 * @usage
 *
 * In the following example once the image has loaded the <pre>image.onLoad()</pre> function will be called.
 *
 * <pre>
 *   <img ng-src="{{image.url}}"  ng-src="{{image.url}}" f9-image-load on-load="image.onLoad">
 * </pre>
 *
 *
 */

(function() {
	'use strict';

	angular.module('f9.shared.ui.image-load', [])
		.directive('f9ImageLoad', ImageLoad);

	function ImageLoad() {

		return {
			restrict: 'A',
			bindToController: true,
			scope: {
				onLoad: '&'
			},
			controllerAs: 'image',
			controller: ImageController,
			link: link
		};

		function ImageController() {
			var vm = this;

			vm.loaded = _onLoad;

			function _onLoad(event) {
				vm.onLoad()();
			}
		}

		// binds to the `img load` event
		function link(scope, element, attrs, ctrl) {

			element.bind('load', _onLoad);

			// handles the load event
			function _onLoad(event) {
				ctrl.loaded();
			}
		}
	}
})();



