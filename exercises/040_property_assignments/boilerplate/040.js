// -> Define three objects: 'machine', 'robot' and 'vehicle'
//    In the definition of machine add a property 'motors' set to null.
__

// -> Let's make machine the prototype of robot and vehicle
vehicle.__proto__ = machine;
robot.__proto__ = machine;

// -> What are `machines.motors`, `robot.motors` and `vehicle.motors`?
claim(machine.motors, __);
claim(robot.motors, __);
claim(vehicle.motors, __);

// -> Set `robot.motors` to 4 by direct assignment
__

// -> What are `machines.motors`, `robot.motors` and `vehicle.motors` now?
claim(machine.motors, __);
claim(robot.motors, __);
claim(vehicle.motors, __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine:  machine,
	vehicle:  vehicle,
	robot:    robot
}
