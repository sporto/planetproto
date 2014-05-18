assertions = require('../../lib/assertions');

function verify(exercise, userMod, verifyCallback){

	function fail(msg) {
		exercise.emit('fail', msg);
		return verifyCallback(msg, false);
	}

	var animal = userMod.animal;
	var cat    = userMod.cat;
	var felix  = userMod.felix;

	if (!animal) {
		return fail('You must export a animal variable');
	}

	if (!cat) {
		return fail('You must export a cat variable');
	}

	if (!felix) {
		return fail('You must export a felix variable');
	}

	if (cat.__proto__ != animal) {
		return fail('animal must be the prototype of cat');
	}

	if (felix.__proto__ != cat) {
		return fail('cat must be the prototype of felix');
	}

	if (animal.legs != 4) {
		return fail("animal must define legs");
	}

	if (!cat.cute) {
		return fail('cat must define cute');
	}

	if (!cat.hasOwnProperty('cute')) {
		return fail('cute must be defined in the cat object');
	}

	verifyCallback(null, true)
}

module.exports = verify;
