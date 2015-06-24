/**
 * Created by factornine on 21/06/2015.
 */

// see: https://www.airpair.com/angularjs/posts/component-based-angularjs-directives
// declare module in the Controller
angular.module('f9.grid.multiplication-old', [])

	.controller('MultiplicationController', Multiplication);

function Multiplication() {


	console.log('multiplication!');
	var vm = this;

	vm.rows = [
		[ 1, 1, 1, 1 ],
		[ 1, 1, 1, 1 ],
		[ 1, 1, 1, 1 ],
		[ 1, 1, 1, 1 ]
	];


}