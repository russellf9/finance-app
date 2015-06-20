/**
 * Created by factornine on 13/06/2015.
 */

// declare module in the Controller
angular.module('f9.grid.simple-example', [])

	.controller('SimpleExampleController', _simpleExample);

function _simpleExample($state) {

	var vm = this;

	console.log('hi from the SimpleExample! :-)', $state);

	vm.currentState = $state.current.name;

	vm.name = 'russell';

	
	vm.columnDefs = [
		{displayName: 'Make', field: 'make'},
		{displayName: 'Model', field: 'model'},
		{displayName: 'Price', field: 'price'}
	];

	vm.rowData = [
		{make: 'Toyota', model: 'Celica', price: 35000},
		{make: 'Ford', model: 'Mondeo', price: 32000},
		{make: 'Porsche', model: 'Boxter', price: 72000}
	];

	vm.gridOptions = {
		columnDefs: vm.columnDefs,
		rowData: vm.rowData,
		dontUseScrolls: true // because so little data, no need to use scroll bars
	};


}




