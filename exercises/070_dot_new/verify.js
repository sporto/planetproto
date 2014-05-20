var assertions = require('../../lib/assertions');
var _          = require('underscore');

function verify(exercise, userMod, verifyCallback){

	function fail(msg) {
		exercise.emit('fail', msg);
		return verifyCallback(msg, false);
	}

	var machine    = userMod.machine;

	if (!machine) {
		return fail('You must export a machine variable');
	}

	if (!_.isFunction(machine.new)) {
		return fail('machine.new must be a function');
	}

	var robot = machine.new();

	if (!robot) {
		return fail('machine.new must return an object');
	}

	if(robot.__proto__ !== machine) {
		return fail('machine must be the prototype of robot');
	}


	verifyCallback(null, true)
}

module.exports = verify;
