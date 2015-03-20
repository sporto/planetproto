var makeVerificator = require('../../lib/helpers').makeVerificator;
var _               = require('underscore');
var assert          = require('chai').assert;

function verify(exercise, userMod, verifyCallback){

	var errors = [];
	var it = makeVerificator(exercise, errors);

	var machine    = userMod.machine;
	var robot      = userMod.robot;
	var robby      = userMod.robby;

	it('exports a machine variable', function () {
		assert.isDefined(machine);
	});

	it('exports a robot variable', function () {
		assert.isDefined(robot);
	});

	it('exports a robby variable', function () {
		assert.isDefined(robby);
	});

	it("machine is the prototype of robot", function () {
		assert.strictEqual(robot.__proto__, machine);
	});

	it("robot is the prototype of robby", function () {
		assert.strictEqual(robby.__proto__, robot);
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

