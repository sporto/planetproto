assertions = require('../../lib/assertions');

function verify(exercise, userMod, verifyCallback){

	function fail(msg) {
		exercise.emit('fail', msg);
		return verifyCallback(msg, false);
	}

	var animal = userMod.animal;
	var cat    = userMod.cat;
	var dog    = userMod.dog;

	if (!animal) {
		return fail('You must export a animal variable');
	}

	if (!cat) {
		return fail('You must export a cat variable');
	}

	if (!dog) {
		return fail('You must export a dog variable');
	}

	if (cat.__proto__ != animal) {
		return fail('animal must be the prototype of cat');
	}

	if (dog.__proto__ != animal) {
		return fail('animal must be the prototype of dog');
	}

	if (!animal.hasOwnProperty('legs')) {
		return fail('animal must define a property legs');
	}

	if (animal.legs !== null) {
		return fail('animal.legs must be null');
	}

	if (!cat.hasOwnProperty('legs')) {
		return fail('cat must has a property legs');
	}

	if (cat.legs !== 4) {
		return fail('cat.legs must be 4');
	}


	verifyCallback(null, true)
}

module.exports = verify;
