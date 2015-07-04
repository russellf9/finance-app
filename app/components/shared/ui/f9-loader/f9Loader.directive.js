/**
 * Created by factornine on 02/07/2015.
 */


angular.module('f9.shared.ui.loader', [])
	.directive('f9Loader', Loader);

function Loader() {

	return {
		restrict: 'EA',
		templateUrl: 'components/shared/ui/f9-loader/loader.template.html',
		bindToController: true,
		scope: {
			done: '='
		},
		controllerAs: 'loader',
		controller: loaderController
	};

	function loaderController() {
		var vm = this;
	}
}


