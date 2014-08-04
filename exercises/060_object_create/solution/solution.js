var machine = {}

var robot = Object.create(machine);
var robby = Object.create(robot);

// -> What is the result of `machine.isPrototypeOf(robby)`?
claim(machine.isPrototypeOf(robby), true);

// -> What is the result of `robot.isPrototypeOf(robby)`?
claim(robot.isPrototypeOf(robby), true);

// -> Which object is the direct prototype of robby?
claim.same(Object.getPrototypeOf(robby), robot);

// ------------------------------------------------
module.exports = {
	machine:  machine,
	robot:    robot,
	robby:    robby
}
