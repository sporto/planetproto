var makeVerificator = require('../../lib/helpers').makeVerificator;
var _               = require('underscore');
var assert          = require('chai').assert;

function verify(exercise, userMod, verifyCallback){

	var errors = [];
	var it = makeVerificator(exercise, errors);

	var Robot   = userMod.Robot;
	var robby   = userMod.robby;
	var cranky  = userMod.cranky;

	it("exports Robot", function () {
		assert.isDefined(Robot);
	}); 

	it("exports robby", function () {
		assert.isDefined(robby);
	}); 

	it("exports cranky", function () {
		assert.isDefined(cranky);
	}); 

	it("Robot is a function", function () {
		assert.isFunction(Robot);
	}); 

	it("robby is an instance of Robot", function () {
		assert.instanceOf(robby, Robot);
	});

	it("cranky is an instance of Robot", function () {
		assert.instanceOf(cranky, Robot)
	});

	it('an instance of Robot defines parts', function () {
		var other = new Robot();
		assert.isDefined(other.parts);
	});

	it('an instance of Robot defines capabilities', function () {
		var other = new Robot();
		assert.isDefined(other.capabilities);
	});

	it('parts is an array', function () {
		var other = new Robot();
		assert.isArray(other.parts);
	});

	it('capabilities is an array', function () {
		var other = new Robot();
		assert.isArray(other.capabilities);
	});

	it('parts is initially empty', function () {
		var other = new Robot();
		assert.equal(other.parts.length, 0);
	});

	it('finds an item in robby.parts', function () {
		assert.equal(robby.parts.length, 1);
	});

	it('first item in robby.parts is core', function () {
		assert.equal(robby.parts[0], 'core');
	});

	it('finds zero items in cranky.parts', function () {
		assert.equal(cranky.parts.length, 0);
	});

	it('capabilities is not directly added to robby', function () {
		assert.isFalse(robby.hasOwnProperty('capabilities'));
	});

	it('capabilities is not directly added to cranky', function () {
		assert.isFalse(cranky.hasOwnProperty('capabilities'));
	});

	it('finds one item in robby.capabilities', function () {
		assert.equal(robby.parts.length, 1);
	});

	it('finds one item in cranky.capabilities', function () {
		assert.equal(cranky.capabilities.length, 1);
	});

	it('finds fly in robby.capabilities', function () {
		assert.equal(robby.capabilities[0], 'fly');
	});

	it('finds fly in cranky.capabilities', function () {
		assert.equal(cranky.capabilities[0], 'fly');
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

