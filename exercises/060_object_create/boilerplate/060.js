// -> Let's create an object called 'machine'
var machine = {}

// -> Use Object.create to create another object called 'robot' with 'machine' 
//    set as the prototype
__

// -> Use Object.create to create another object called 'robby' with 'robot' 
//    as the prototype
__

// -> What is the result of `machine.isPrototypeOf(robby)`?
claim(machine.isPrototypeOf(robby), __);

// -> What is the result of `robot.isPrototypeOf(robby)`?
claim(robot.isPrototypeOf(robby), __);

// -> Which object is the direct prototype of robby?
claim.same(Object.getPrototypeOf(robby), __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine:  machine,
	robot:    robot,
	robby:    robby
}
