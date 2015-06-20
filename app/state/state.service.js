/**
 * Created by russell@factornine.co.uk on 20/06/2015.
 *
 * @description A simple wrapper for the Angular $state
 */


angular
	.module('f9.grid.state', [])
	.factory('f9StateService', f9StateService);

function f9StateService($state) {

	// accessible members up top


	return {

		getStateCurrentName: getStateCurrentName

	};

	/**
	 * @description Returns the current state name
	 * @name getStateCurrentName
	 * @returns {string} The current state name
	 */
	function getStateCurrentName() {
		return $state.current.name;
	}
}