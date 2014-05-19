// var assertions = require('../../lib/assertions');
var _          = require('underscore');

function verify(exercise, userMod, verifyCallback){

	function fail(msg) {
		exercise.emit('fail', msg);
		return verifyCallback(msg, false);
	}

	var Robot    = userMod.Robot;
	var Vehicle  = userMod.Vehicle;

	if (!Robot) {
		return fail('You must export a Robot variable');
	}

	if (!Vehicle) {
		return fail('You must export a Vehicle variable');
	}

	if (!_.isFunction(Robot)) {
		return fail('Robot must be a function');
	}

	if (!_.isFunction(Vehicle)) {
		return fail('Vehicle must be a function');
	}

	var robot = new Robot();
	var vehicle = new Vehicle();

	if (!(robot instanceof Robot)) {
		return fail('new Robot() must return an instance of Robot');
	}

	if ((vehicle instanceof Vehicle)) {
		return fail('new Vehicle() must not return an instance of Vehicle');
	}

	verifyCallback(null, true);
}

module.exports = verify;
