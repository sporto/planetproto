function verify(exercise, userMod, verifyCallback){

	function fail(msg) {
		exercise.emit('fail', msg);
		return verifyCallback(msg, false);
	}

	var robot    = userMod.robot;

	if (!robot) {
		return fail('You must export a robot variable');
	}

	if (!robot.hasOwnProperty('smart')) {
		return fail('robot must define smart');
	}

	if (robot.smart !== true) {
		return fail('robot.smart must be true');
	}

	verifyCallback(null, true)
}

module.exports = verify;
