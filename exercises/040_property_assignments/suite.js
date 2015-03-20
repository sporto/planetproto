var makeVerificator = require('../../lib/helpers').makeVerificator;
var assert          = require('chai').assert;

function verify(exercise, userMod, verifyCallback){

	var errors = [];
	var it = makeVerificator(exercise, errors);

	var machine   = userMod.machine;
	var robot     = userMod.robot;
	var vehicle   = userMod.vehicle;

	it('exports a machine variable', function () {
		assert.isDefined(machine);
	});

	it('exports a robot variable', function () {
		assert.isDefined(robot);
	});

	it('export a vehicle variable', function () {
		assert.isDefined(vehicle)
	});

	it('machine is the prototype of robot', function () {
		assert.strictEqual(robot.__proto__, machine);
	});

	it('machine is the prototype of vehicle', function () {
		assert.strictEqual(vehicle.__proto__, machine);
	});

	it('machine defines an own property motors', function () {
		assert.ok(machine.hasOwnProperty('motors'))
	});

	it('machine.motors is null', function () {
		assert.isNull(machine.motors);
	});

	it('robot has an own property motors', function () {
		assert.ok(robot.hasOwnProperty('motors'));
	});

	it('robot.motors is 4', function () {
		assert.equal(robot.motors, 4);
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

