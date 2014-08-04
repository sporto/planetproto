// -> Define a 'Robot' constructor function
// -> Inside the Robot constructor assign a property 'motors' on 'this',
//    set motors to 2
// -> Create an instance of Robot called 'robby'

__

// -> What is the result of `(robby instanceof Robot)`?
claim((robby instanceof Robot), __);

// -> What is `robby.motors`?
claim(robby.motors, __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:  Robot,
	robby:  robby
}
