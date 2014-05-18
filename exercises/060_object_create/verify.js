var assertions = require('../../lib/assertions');
var _          = require('underscore');

function verify(exercise, userMod, verifyCallback){

	function fail(msg) {
		exercise.emit('fail', msg);
		return verifyCallback(msg, false);
	}

	var machine    = userMod.machine;
	var robot      = userMod.robot;
	var robby    = userMod.robby;

	if (!machine) {
		return fail('You must export a machine variable');
	}

	if (!robot) {
		return fail('You must export a robot variable');
	}

	if (!robby) {
		return fail('You must export a robby variable');
	}

	if (robot.__proto__ != machine) {
		return fail('machine must be the prototype of robot');
	}

	if (robby.__proto__ != robot) {
		return fail('robot must be the prototype of robby');
	}







	verifyCallback(null, true)
}

module.exports = verify;
