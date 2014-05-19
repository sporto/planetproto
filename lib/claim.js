var util = require('util');
var _    = require('underscore');

function similar(actual, expected) {
	// do not allow the user to just pass the actual as expected
	var same = (actual === expected);
	var isObj = _.isObject(expected);
	var isFun = _.isFunction(expected);

	if (same && (isObj || isFun)) {
		console.log(util.inspect(actual) + ' => Error: You must pass a different object to compare');
		return false;
	}

	var res  = JSON.stringify(actual) === JSON.stringify(expected) ;
	console.log(util.inspect(actual) + ' == ' + util.inspect(expected) + ' => ' + res);
	return res;
}

function same(actual, expected) {
	var res = actual === expected;
	console.log(util.inspect(actual) + ' === ' + util.inspect(expected) + ' => ' + res);
	return res;
}

var claim = similar;
claim.same = same;

module.exports = claim;
