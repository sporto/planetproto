// Create a machine object
// with a property motors = 4
var machine = {
	motors: 4
};

// Create a robot object
// with a property friendly = true
var robot = {
	friendly: true
};

// Create a robby object
var robby = {};

// Make machine the prototype of robot
robot.__proto__ = machine;

// Make robot the prototype of robby
robby.__proto__ = robot;

// What is robby.motors?
claim(robby.motors, 4);

// What is robby.friendy?
claim(robby.friendly, true);

module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}
