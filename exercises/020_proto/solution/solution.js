var compare = require('../../../lib/compare');

var machine = {
	legs: 4
};

var robot = {
	cute: true
};

var robby = {};

robot.__proto__ = machine;

robby.__proto__ = robot;

compare(robby.legs, 4);
compare(robby.cute, true);

module.exports = {
	machine: machine,
	robot:    robot,
	robby:  robby
}
