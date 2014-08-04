// -> Let's define three objects: 'machine' 'vehicle' and 'robot'
var machine = {}
var vehicle = {}
var robot = {}

// -> Make machine the prototype of vehicle
// -> Make machine the prototype of robot
__

// -> What is `vehicle.motors`?
claim(vehicle.motors, __);

// -> What is `robot.motors`?
claim(robot.motors, __);

// -> Define a 'motors' property on machine, set this to 4
__

// -> What is `vehicle.motors` now?
claim(vehicle.motors, __);

// -> What is `robot.motors`?
claim(robot.motors, __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	vehicle: vehicle,
	robot:   robot
}
