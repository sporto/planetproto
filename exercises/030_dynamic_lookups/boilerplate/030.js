// -> Define three objects: 'machine' 'vehicle' and 'robot'
// -> Make machine the prototype of vehicle
// -> Make machine the prototype of robot
__

// What is vehicle.motors?
// -> Claim the result of vehicle.motors
claim(vehicle.motors, __);

// What is robot.motors?
// -> Claim the result of robot.motors
claim(robot.motors, __);

// -> Define a 'motors' property on machine, set this to 4
__

// What is vehicle.motors?
// -> Claim the result of vehicle.motors again
claim(vehicle.motors, __);

// What is robot.motors?
// -> Claim the result of robot.motors again
claim(robot.motors, __);

module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}
