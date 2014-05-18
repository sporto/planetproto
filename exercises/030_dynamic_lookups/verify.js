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

	if (dog.hasOwnProperty('legs')) {
		return fail('dog must not define legs directly');
	}

	if (cat.hasOwnProperty('legs')) {
		return fail('cat must not define legs directly');
	}


	verifyCallback(null, true)
}

module.exports = verify;
