var claim = require('./lib/claim');

var machine = {}

var robot = {};

var robby = {};

robot.__proto__ = machine;
robby.__proto__ = robot;

claim(machine.isPrototypeOf(robby), true);
compare.same(Object.getPrototypeOf(robby), robot);

module.exports = {
	machine:  machine,
	robot:    robot,
	robby:    robby
}
