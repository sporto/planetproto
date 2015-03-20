var makeVerificator = require('../../lib/helpers').makeVerificator;
var assert          = require('chai').assert;

function verify(exercise, userMod, verifyCallback){

	var errors = [];
	var it = makeVerificator(exercise, errors);

	var Robot    = userMod.Robot;
	var Vehicle  = userMod.Vehicle;

	it('exports a Robot variable', function () {
		assert.isDefined(Robot);
	});

	it('exports a Vehicle variable', function () {
		assert.isDefined(Vehicle);
	});

	it('Robot is a function', function () {
		assert.isFunction(Robot);
	});

	it('Vehicle is a function', function () {
		assert.isFunction(Vehicle);
	});

	it('new Robot() returns an instance of Robot', function () {
		var robot = new Robot();
		assert.instanceOf(robot, Robot);
	});

	it("new Vehicle() doesn't return an instance of Vehicle", function () {
		var vehicle = new Vehicle();
		assert.notInstanceOf(vehicle, Vehicle);
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

