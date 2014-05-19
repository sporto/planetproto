var _          = require('underscore');

function verify(exercise, userMod, verifyCallback){

	function fail(msg) {
		exercise.emit('fail', msg);
		return verifyCallback(msg, false);
	}

	var machine = userMod.machine;
	var robot   = userMod.robot;
	var vehicle     = userMod.vehicle;

	if (!machine) {
		return fail('You must export a machine variable');
	}

	if (!robot) {
		return fail('You must export a robot variable');
	}

	if (!vehicle) {
		return fail('You must export a vehicle variable');
	}

	if (robot.__proto__ != machine) {
		return fail('machine must be the prototype of robot');
	}

	if (vehicle.__proto__ != machine) {
		return fail('machine must be the prototype of vehicle');
	}

	if (!machine.hasOwnProperty('parts')) {
		return fail('machine must have a parts property');
	}

	if (!machine.hasOwnProperty('capabilities')) {
		return fail('machine must have a capabilities property');
	}

	if (!_.isArray(machine.parts)) {
		return fail('machine.parts must be an array');
	}

	if (!_.isObject(machine.capabilities)) {
		return fail('machine.parts must be an object');
	}

	if (robot.hasOwnProperty('parts')) {
		return fail('robot must not own parts directly');
	}

	if (vehicle.hasOwnProperty('parts')) {
		return fail('vehicle must not own parts directly');
	}

	if (robot.hasOwnProperty('capabilities')) {
		return fail('robot must not own capabilities directly');
	}

	if (vehicle.hasOwnProperty('capabilities')) {
		return fail('vehicle must not own capabilities directly');
	}

	if (machine.parts.length !== 1) {
		return fail('parts should have exactly one item');
	}

	if (machine.parts[0] != 'core') {
		return fail('expected to find core in parts');
	}

	if (!machine.capabilities.hasOwnProperty('fly')) {
		return fail('capabilities should have a fly property');
	}

	if (machine.capabilities.fly !== true) {
		return fail('capabilities.fly should be true');
	}

	verifyCallback(null, true)
}

module.exports = verify;
