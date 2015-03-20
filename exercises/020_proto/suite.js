var makeVerificator = require('../../lib/helpers').makeVerificator;
var assert          = require('chai').assert;

function verify(exercise, userMod, verifyCallback){

	var errors = [];
	var it = makeVerificator(exercise, errors);

	var machine  = userMod.machine;
	var robot    = userMod.robot;
	var robby    = userMod.robby;

	it('exports a machine variable', function () {
		assert.isDefined(machine);
	});

	it('exports a robot variable', function () {
		assert.isDefined(robot);
	});

	it('exports a robby variable', function () {
		assert.isDefined(robot);
	});

	it('machine is the prototype of robot', function () {
		assert.strictEqual(robot.__proto__, machine);
	});

	it('robot is the prototype of robby', function () {
		assert.strictEqual(robby.__proto__, robot);
	});

	it("machine defines motors", function () {
		assert.equal(machine.motors, 4);
	});

	it('robot defines friendly', function () {
		assert.isTrue(robby.friendly);
	});

	it('friendly is defined in the robot object', function () {
		assert.isTrue(robot.hasOwnProperty('friendly'));
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

