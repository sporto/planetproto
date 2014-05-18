var compare = require('../../../lib/compare');

var machine = {}

var vehicle = {}

var robot = {}

vehicle.__proto__ = machine;
robot.__proto__ = machine;

compare(vehicle.legs, undefined);
compare(robot.legs, undefined);

machine.legs = 4;

compare(vehicle.legs, 4);
compare(robot.legs, 4);


module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}
