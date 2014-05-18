var assertions = require('../../lib/assertions');
var _          = require('underscore');

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

	if (!animal.hasOwnProperty('tricks')) {
		return fail('animal must have a tricks property');
	}

	if (!animal.hasOwnProperty('abilities')) {
		return fail('animal must have a abilities property');
	}

	if (!_.isArray(animal.tricks)) {
		return fail('animal.tricks must be an array');
	}

	if (!_.isObject(animal.abilities)) {
		return fail('animal.tricks must be an object');
	}

	if (cat.hasOwnProperty('tricks')) {
		return fail('cat must not own tricks directly');
	}

	if (dog.hasOwnProperty('tricks')) {
		return fail('dog must not own tricks directly');
	}

	if (cat.hasOwnProperty('abilities')) {
		return fail('cat must not own abilities directly');
	}

	if (dog.hasOwnProperty('abilities')) {
		return fail('dog must not own abilities directly');
	}

	if (animal.tricks.length !== 1) {
		return fail('tricks should have exactly one item');
	}

	if (animal.tricks[0] != 'roll') {
		return fail('expected to find roll in tricks');
	}

	if (!animal.abilities.hasOwnProperty('walk')) {
		return fail('abilities should have a walk property');
	}

	if (animal.abilities.walk !== true) {
		return fail('abilities.walk should be true');
	}

	verifyCallback(null, true)
}

module.exports = verify;
