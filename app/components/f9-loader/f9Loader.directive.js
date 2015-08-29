/**
 * Created by factornine on 02/07/2015.
 */


angular.module('f9.grid.f9-loader', [])
	.directive('f9Loader', Loader);

function Loader() {

	return {
		restrict: 'EA',
		templateUrl: 'components/f9-loader/loader.template.html',
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


