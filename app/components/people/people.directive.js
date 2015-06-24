/**
 * Created by factornine on 24/06/2015.
 */


angular.module('f9.grid.people', [])
	.directive('people', People);

function People(PeopleService) {

	return {
		restrict: 'EA',
		transclude: true,
		templateUrl: 'components/people/people.template.html',
		// this is new to AngularJS 1.3
		bindToController: true,
		scope: {
		},
		controllerAs: 'ctrl',
		controller: controller
	};

	function controller() {
		var vm = this;

		console.log('x People::controller!');

		PeopleService.getRandomPerson().then(function(result) {

			console.log('result: ', result)

			vm.person = result.data.results[0].user;



			// adjust the data

			vm.person.firstName = vm.person.name.first;
			vm.person.secondName = vm.person.name.last;

			console.log('Person: ', vm.person);


		}, function(error) {

		})


	}
}

