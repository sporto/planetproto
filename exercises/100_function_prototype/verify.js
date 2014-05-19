// var assertions = require('../../lib/assertions');
var _          = require('underscore');

function verify(exercise, userMod, verifyCallback){

	function fail(msg) {
		exercise.emit('fail', msg);
		return verifyCallback(msg, false);
	}

	var Robot    = userMod.Robot;
	var robby   = userMod.robby;
	var cranky  = userMod.cranky;

	if (!Robot) {
		return fail('You must export a Robot variable');
	}

	if (!robby) {
		return fail('You must export a robby variable');
	}

	if (!cranky) {
		return fail('You must export a cranky variable');
	}

	if (!_.isFunction(Robot)) {
		return fail('Robot must be a function');
	}

	if (!(robby instanceof Robot)){
		return fail('robby must be an instance of Robot');
	}

	if (!(cranky instanceof Robot)){
		return fail('cranky must be an instance of Robot');
	}

	var robot = new Robot();

	if (!robot.parts) {
		return fail('An instance of Robot must define parts');
	}

	if (!robot.capabilities) {
		return fail('An instance of Robot must define capabilities');
	}

	if (!_.isArray(robot.parts)) {
		return fail('parts must be an array');
	}

	if (!_.isArray(robot.capabilities)) {
		return fail('capabilities must be an array');
	}

	if (robot.parts.length > 0) {
		return fail('parts must be initially empty');
	}

	if (robby.parts.length !== 1) {
		return fail('expected to find one item in robby.parts');
	}

	if (robby.parts[0] != 'core') {
		return fail('expected to find core in robby.parts');
	}

	if (cranky.parts.length !== 0) {
		return fail('expected to find zero items in cranky.parts');
	}

	if (robby.hasOwnProperty('capabilities')) {
		return fail('capabilities must not be directly added to robby');
	}

	if (cranky.hasOwnProperty('capabilities')) {
		return fail('capabilities must not be directly added to cranky');
	}

	if (robby.capabilities.length !== 1) {
		return fail('expected to find one item in robby.capabilities');
	}

	if (cranky.capabilities.length !== 1) {
		return fail('expected to find one item in cranky.capabilities');
	}

	if (robby.capabilities[0] != 'fly') {
		return fail('expected to find fly in robby.capabilities');
	}

	if (cranky.capabilities[0] != 'fly') {
		return fail('expected to find fly in cranky.capabilities');
	}

	verifyCallback(null, true);
}

module.exports = verify;
