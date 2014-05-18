var compare = require('../../../lib/compare');

var machine = {
	legs: null
};

var vehicle = {};

var robot = {};

vehicle.__proto__ = machine;
robot.__proto__ = machine;

compare(machine.legs, null);
compare(robot.legs, null);
compare(vehicle.legs, null);

robot.legs = 4;

compare(machine.legs, null);
compare(robot.legs, 4);
compare(vehicle.legs, null);

module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}
