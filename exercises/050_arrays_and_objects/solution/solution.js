var machine = {
	parts: [],
	capabilities: {}
};

var vehicle = {};
var robot = {};

robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> What is `robot.parts`?
claim(robot.parts, []);

// -> What is `vehicle.parts`?
claim(vehicle.parts, []);

claim(robot.capabilities, {});
claim(vehicle.capabilities, {});

robot.parts.push('core');

claim(robot.parts, ['core']);
claim(vehicle.parts, ['core']);

vehicle.capabilities.fly = true;

claim(robot.capabilities, {fly: true});
claim(vehicle.capabilities, {fly: true});

module.exports = {
	machine:   machine,
	vehicle:   vehicle,
	robot:     robot
}
