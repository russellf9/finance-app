/**
 * Created by russell@factornine.co.uk on 28/06/2015.
 */


angular.module('f9.shared.random-data', [])
	.service('RandomDataService', Service);

function Service() {

	// 'private data'

	// the UK mobile phone prefix as a String
	var _prefix = '4407';


	return  {
		getMobileNumber: getMobileNumber
	};


	///////////

	/**
	 * @description Returns random mobile number in the form: 4407xxxxxxxxx
	 * @returns {number}
	 */
	function getMobileNumber() {
		return Number('4407' + _randomSeries(9));
	}

	/**
	 * @description Returns a string composed of a sequence of random numbers
	 * @param length The length of the String to return
	 * @returns {string}
	 */
	function _randomSeries(length) {
		var string = '';
		for(var i = 0; i < length; i++) {
			string = string + String(_randomDigit());
		}
		return string;
	}
	// returns a random number between 0 and 9
	function _randomDigit() {
		return Math.floor((Math.random() * 10));
	}

}
