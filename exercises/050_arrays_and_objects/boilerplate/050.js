// -> Create three objects: 'machine', 'robot' and 'vehicle'
// -> In the definition of machine set a property 'parts', set it to an 
//    empty array `[]`
// -> In the definition of machine set a property 'capabilities', set it to 
//    an empty object `{}`
// -> Set the prototype of both robot and vehicle to machine
// -> Set the prototype of both robot and vehicle to machine
__

// -> Claim the result of robot.parts
claim(robot.parts, __);
// -> Claim the result of vehicle.parts
claim(vehicle.parts, __);
// -> Claim the result of robot.capabilities
claim(robot.capabilities, __);
// -> Claim the result of vehicle.capabilities
claim(vehicle.capabilities, __);

// -> Add a 'core' part to robot by doing `robot.parts.push('core')`
// -> Add an ability to vehicle by doing `vehicle.capabilities.fly = true`
__

// -> Claim the result of robot.parts
claim(robot.parts, __);
// -> Claim the result of vehicle.parts
claim(vehicle.parts, __);
// -> Claim the result of robot.capabilities
claim(robot.capabilities, __);
// -> Claim the result of vehicle.capabilities
claim(vehicle.capabilities, __);


module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}
