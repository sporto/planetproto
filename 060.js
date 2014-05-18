var compare = require('./lib/compare');

var machine = {}

var robot = {};

var robby = {};

robot.__proto__ = machine;
robby.__proto__ = robot;

compare(machine.isPrototypeOf(robby), true);
compare.same(Object.getPrototypeOf(robby), robot);

module.exports = {
	machine:  machine,
	robot:    robot,
	robby:    robby
}
