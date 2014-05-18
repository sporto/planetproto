var compare = require('./lib/compare');

var machine = {
	parts: [],
	capabilities: {}
};

var vehicle = {};

var robot = {};

robot.__proto__ = machine;
vehicle.__proto__ = machine;

compare(robot.parts, []);
compare(vehicle.parts, []);
compare(robot.capabilities, {});
compare(vehicle.capabilities, {});

robot.parts.push('core');
vehicle.capabilities.fly = true;

compare(robot.parts, ['core']);
compare(vehicle.parts, ['core']);
compare(robot.capabilities, {fly: true});
compare(vehicle.capabilities, {fly: true});

module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}
