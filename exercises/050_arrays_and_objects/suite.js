var makeVerificator = require('../../lib/helpers').makeVerificator;
var assert          = require('chai').assert;

function verify(exercise, userMod, verifyCallback){

	var errors = [];
	var it = makeVerificator(exercise, errors);

	var machine = userMod.machine;
	var robot   = userMod.robot;
	var vehicle = userMod.vehicle;

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

	it('machine has a parts property', function () {
		assert.ok(machine.hasOwnProperty('parts'));
	});

	it('machine has a capabilities property', function () {
		assert.ok(machine.hasOwnProperty('capabilities'));
	});

	it('machine.parts is an array', function () {
		assert.isArray(machine.parts);
	});

	it('machine.capabilities is an object', function () {
		assert.isObject(machine.capabilities);
	});

	it("robot doesn't own parts directly", function () {
		assert.isFalse(robot.hasOwnProperty('parts'));
	});

	it("vehicle doesn't own parts directly", function () {
		assert.isFalse(vehicle.hasOwnProperty('parts'));
	});

	it("robot doesn't own capabilities directly", function () {
		assert.isFalse(robot.hasOwnProperty('capabilities'));
	});

	it("vehicle doesn't own capabilities directly", function () {
		assert.isFalse(vehicle.hasOwnProperty('capabilities'));
	});

	it('parts has exactly one item', function () {
		assert.equal(machine.parts.length, 1);
	});

	it('found core in parts', function () {
		assert.equal(machine.parts[0], 'core');
	});

	it('capabilities has a fly property', function () {
		assert.ok(machine.capabilities.hasOwnProperty('fly'));
	});

	it('capabilities.fly is true', function () {
		assert.isTrue(machine.capabilities.fly)
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

