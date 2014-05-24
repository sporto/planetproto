// -> Create an object called 'machine'
// -> Use Object.create to create another object called 'robot' with 'machine' 
//    set as the prototype
// -> Use Object.create to create another object called 'robby' with 'robot' 
//    as the prototype
__

// -> Claim the result of `machine.isPrototypeOf(robby)` (use claim())
claim(machine.isPrototypeOf(robby), __);
// -> Claim the result of `robot.isPrototypeOf(robby)` (use claim())
claim(robot.isPrototypeOf(robby), __);
// -> Claim the results of `Object.getPrototypeOf(robby)` (use claim.same())
// claim.same checks that two variables are the same object, not just similar
claim.same(Object.getPrototypeOf(robby), __);

module.exports = {
	machine:  machine,
	robot:    robot,
	robby:    robby
}
