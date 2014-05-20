var machine = {}
var robot = Object.create(machine);
var robby = Object.create(robot);

claim(machine.isPrototypeOf(robby), true);
claim(robot.isPrototypeOf(robby), true);
claim.same(Object.getPrototypeOf(robby), robot);

module.exports = {
	machine:  machine,
	robot:    robot,
	robby:    robby
}
