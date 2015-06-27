angular.module('f9.shared.filters', []).filter('capitalizeAllWords', function() {
	return function(input, scope) {

		return input.replace(/\w\S*/g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};
});