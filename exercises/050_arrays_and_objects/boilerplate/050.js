// -> Create three objects: 'machine', 'robot' and 'vehicle'
// -> In the definition of machine set a property 'parts', set it to an 
//    empty array `[]`
// -> In the definition of machine set a property 'capabilities', set it to 
//    an empty object `{}`
__

// -> Let's set the prototype of both robot and vehicle to machine
robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> What is `robot.parts`?
claim(robot.parts, __);

// -> What is `vehicle.parts`?
claim(vehicle.parts, __);

// -> What is `robot.capabilities`?
claim(robot.capabilities, __);

// -> What is `vehicle.capabilities`?
claim(vehicle.capabilities, __);

// -> Let's add a 'core' part to robot
robot.parts.push('core');

// -> What is `robot.parts` now?
claim(robot.parts, __);

// -> What is `vehicle.parts` now?
claim(vehicle.parts, __);

// -> Let's set an ability to vehicle
vehicle.capabilities.fly = true;

// -> What is `robot.capabilities` now?
claim(robot.capabilities, __);

// -> What is `vehicle.capabilities` now?
claim(vehicle.capabilities, __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}
