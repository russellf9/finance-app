/**
 * Created by factornine on 28/06/2015.
 */


/**
 * Created by factornine on 27/06/2015.
 */


angular.module('f9.shared.ui.image-load', [])
	.directive('f9ImageLoad', ImageLoad);

function ImageLoad() {

	return {
		restrict: 'A',
		//bindToController: true, // NOTE: We need the link function to have reference to the scope
		scope: {
			onLoad: '&'
		},
		controllerAs: 'image',
		controller: controller,
		link: link
	};

	function controller() {
		var vm = this;

		vm.onLoad = _onLoad;

		function _onLoad(event)  {
			console.log('Controller Image has loaded!')
		}

	}

	function link(scope, element, attrs, ctrl) {


		element.bind('load', _onLoad);


		function _onLoad(event)  {
			console.log(' image directive - On load!', scope)


			//ctrl._onLoad();
			scope.onLoad()();
		}

	}
}


