function compare(actual, expected) {
	var res = actual == expected;
	console.log('Comparing ' + actual + ' to ' + expected + ' => ' + res);
}

module.exports = compare;
