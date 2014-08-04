var machine = {}
var vehicle = {}
var robot = {}

vehicle.__proto__ = machine;
robot.__proto__ = machine;

// What is vehicle.motors
claim(vehicle.motors, undefined);
// What is robot.motors?
claim(robot.motors, undefined);

machine.motors = 4;

// -> What is `vehicle.motors` now?
claim(vehicle.motors, 4);

// -> What is `robot.motors`?
claim(robot.motors, 4);

// ------------------------------------------------
module.exports = {
	machine: machine,
	vehicle: vehicle,
	robot:   robot
}
