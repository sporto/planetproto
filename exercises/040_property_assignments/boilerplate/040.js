// -> Define three objects: 'machine', 'robot' and 'vehicle'
// -> In the definition of machine add a property 'motors' set to null.
// -> Make machine the prototype of robot and vehicle
__

// -> Claim machines.motors, robot.motors and vehicle.motors (in that order)
claim(machine.motors, __);
claim(robot.motors, __);
claim(vehicle.motors, __);

// -> Set robot.motors to 4 by direct assignment
__

// -> Claim again machines.motors, robot.motors and vehicle.motors 
//    (in that order)
claim(machine.motors, __);
claim(robot.motors, __);
claim(vehicle.motors, __);

module.exports = {
	machine:  machine,
	vehicle:  vehicle,
	robot:    robot
}
