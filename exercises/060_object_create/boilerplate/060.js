// ... you code here ...

claim(machine.isPrototypeOf(robby), __);
claim(robot.isPrototypeOf(robby), __);
claim.same(Object.getPrototypeOf(robby), __);

module.exports = {
	machine:  machine,
	robot:    robot,
	robby:    robby
}
