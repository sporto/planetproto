var claim = require('./lib/claim');

var machine = {
	parts: [],
	capabilities: {}
};

var vehicle = {};

var robot = {};

robot.__proto__ = machine;
vehicle.__proto__ = machine;

claim(robot.parts, []);
claim(vehicle.parts, []);
claim(robot.capabilities, {});
claim(vehicle.capabilities, {});

robot.parts.push('core');
vehicle.capabilities.fly = true;

claim(robot.parts, ['core']);
claim(vehicle.parts, ['core']);
claim(robot.capabilities, {fly: true});
claim(vehicle.capabilities, {fly: true});

module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}
