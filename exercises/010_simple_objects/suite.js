var makeVerificator = require('../../lib/helpers').makeVerificator;
var assert          = require('chai').assert;

function verify(exercise, userMod, verifyCallback){

	var errors = [];
	var it = makeVerificator(exercise, errors);

	var robot    = userMod.robot;

	it('exports a robot variable', function () {
		assert.isDefined(robot);
	});

	it('robot defines smart', function () {
		assert.ok(robot.hasOwnProperty('smart'));
	});

	it('robot.smart is true', function () {
		assert.isTrue(robot.smart);
	});

	if (errors.length) {
		verifyCallback(null, false);
	} else {
		verifyCallback(null, true);
	}

}

function run() {
	
}

module.exports = {
	verify: verify,
	run:    run
}

