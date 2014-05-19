var claim = require('./lib/claim');

var machine = {
	motors: null
};

var vehicle = {};

var robot = {};

vehicle.__proto__ = machine;
robot.__proto__ = machine;

claim(machine.motors, null);
claim(robot.motors, null);
claim(vehicle.motors, null);

robot.motors = 4;

claim(machine.motors, null);
claim(robot.motors, 4);
claim(vehicle.motors, null);

module.exports = {
	machine: machine,
	vehicle: vehicle,
	robot:   robot
}
