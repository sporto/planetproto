var assertions = require('../../lib/assertions');
var _          = require('underscore');

function verify(exercise, userMod, verifyCallback){

	function fail(msg) {
		exercise.emit('fail', msg);
		return verifyCallback(msg, false);
	}

	var Robot    = userMod.Robot;

	if (!Robot) {
		return fail('You must export a Robot variable');
	}

	if (!_.isFunction(Robot.new)) {
		return fail('Robot.new must be a function');
	}

	var robby = Robot.new();

	if (!robby) {
		return fail('Robot.new must return an object');
	}

	if(robby.__proto__ !== Robot) {
		return fail('Robot must be the prototype of robby');
	}


	verifyCallback(null, true)
}

module.exports = verify;
