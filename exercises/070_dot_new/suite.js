var makeVerificator = require('../../lib/helpers').makeVerificator;
var assert          = require('chai').assert;

function verify(exercise, userMod, verifyCallback){

	var errors = [];
	var it = makeVerificator(exercise, errors);

	var Robot    = userMod.Robot;

	it('exports a Robot variable', function () {
		assert.isDefined(Robot);
	});

	it('Robot.new is defined', function () {
		assert.isDefined(Robot.new);
	});

	it('Robot.new is a function', function () {
		assert.isFunction(Robot.new);
	});

	it('Robot.new returns an object', function () {
		var robby = Robot.new();
		assert.isDefined(robby);
	});

	it('Robot is the prototype of robby', function () {
		var robby = Robot.new();
		assert.strictEqual(robby.__proto__, Robot);
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

