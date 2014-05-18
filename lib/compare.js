var util = require('util');

function compare(actual, expected) {
	var res  = JSON.stringify(actual) === JSON.stringify(expected) ;
	console.log('Comparing ' + util.inspect(actual) + ' to ' + util.inspect(expected) + ' => ' + res);
}

module.exports = compare;
