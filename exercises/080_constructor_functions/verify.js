var assertions = require('../../lib/assertions');
var _          = require('underscore');

function verify(exercise, userMod, verifyCallback){

	function fail(msg) {
		exercise.emit('fail', msg);
		return verifyCallback(msg, false);
	}

	var Robot    = userMod.Robot;
	var robby      = userMod.robby;

	if (!Robot) {
		return fail('You must export a Robot variable');
	}

	if (!robby) {
		return fail('You must export a robby variable');
	}

	if (!_.isFunction(Robot)) {
		return fail('Robot must be a function');
	}

	if (!(robby instanceof Robot)) {
		return fail('robby must be an instance of Robot');
	}

	if (!robby.motors) {
		return fail('robby must have property motors');
	}

	if (robby.motors !== 2) {
		return fail('robby.motors should be 2');
	}

	verifyCallback(null, true)
}

module.exports = verify;
