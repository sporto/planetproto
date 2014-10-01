// -> Create a machine object
//    with a property motors = 4
__

// -> Create a robot object
//    with a property friendly = true
__

// -> Create a robby object
__

// -> Make machine the prototype of robot
__

// -> Make robot the prototype of robby
__

// -> What is `robby.motors`?
claim(robby.motors, __);

// -> What is `robby.friendly`?
claim(robby.friendly, __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}
