var makeVerificator = require('../../lib/helpers').makeVerificator;
var assert          = require('chai').assert;

function verify(exercise, userMod, verifyCallback){

	var errors = [];
	var it = makeVerificator(exercise, errors);

	var machine    = userMod.machine;
	var robot      = userMod.robot;
	var vehicle    = userMod.vehicle;

	it('exports a machine variable', function () {
		assert.isDefined(machine);
	});

	it('exports a robot variable', function () {
		assert.isDefined(robot);
	});

	it('exports a vehicle variable', function () {
		assert.isDefined(vehicle);
	});

	it('machine is the prototype of robot', function () {
		assert.strictEqual(robot.__proto__, machine);
	});

	it('machine is the prototype of vehicle', function () {
		assert.strictEqual(vehicle.__proto__, machine);
	});

	it("vehicle doesn't define motors directly", function () {
		assert.isFalse(vehicle.hasOwnProperty('motors'));
	});

	it("robot doesn't define motors directly", function () {
		assert.isFalse(robot.hasOwnProperty('motors'));
	});

	it('machine.motors is 4', function () {
		assert.equal(machine.motors, 4);
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

