var compare = require('./lib/compare');

var machine = {}

var vehicle = {}

var robot = {}

vehicle.__proto__ = machine;
robot.__proto__ = machine;

compare(vehicle.motors, undefined);
compare(robot.motors, undefined);

machine.motors = 4;

compare(vehicle.motors, 4);
compare(robot.motors, 4);

module.exports = {
	machine: machine,
	vehicle: vehicle,
	robot:   robot
}
