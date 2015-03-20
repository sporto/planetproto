var makeVerificator = require('../../lib/helpers').makeVerificator;
var assert          = require('chai').assert;

function verify(exercise, userMod, verifyCallback){

	var errors = [];
	var it = makeVerificator(exercise, errors);

	var Robot    = userMod.Robot;
	var robby    = userMod.robby;

	it('exports a Robot variable', function () {
		assert.isDefined(Robot);
	});

	it('exports a robby variable', function () {
		assert.isDefined(robby);
	});

	it('Robot is a function', function () {
		assert.isFunction(Robot);
	});

	it('robby is an instance of Robot', function () {
		assert.instanceOf(robby, Robot);
	});

	it('robby has property motors', function () {
		assert.isDefined(robby.motors);
	});

	it('robby.motors is 2', function () {
		assert.equal(robby.motors, 2);
	});

	it('defines robby.motors inside the constructor', function () {
		var other = new Robot();
		assert.isDefined(other.motors);
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

