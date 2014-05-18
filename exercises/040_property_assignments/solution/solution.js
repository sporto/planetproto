var compare = require('../../../lib/compare');

var machine = {
	motors: null
};

var vehicle = {};

var robot = {};

vehicle.__proto__ = machine;
robot.__proto__ = machine;

compare(machine.motors, null);
compare(robot.motors, null);
compare(vehicle.motors, null);

robot.motors = 4;

compare(machine.motors, null);
compare(robot.motors, 4);
compare(vehicle.motors, null);

module.exports = {
	machine: machine,
	vehicle: vehicle,
	robot:   robot
}
