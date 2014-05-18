var compare = require('../../../lib/compare');

var machine = {
	motors: 4
};

var robot = {
	friendly: true
};

var robby = {};

robot.__proto__ = machine;

robby.__proto__ = robot;

compare(robby.motors, 4);
compare(robby.friendly, true);

module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}
