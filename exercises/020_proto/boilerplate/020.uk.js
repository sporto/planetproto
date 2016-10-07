// -> Створіть об'єкт machine
//    з властивістю motors = 4
__

// -> Створіть об'єкт robot
//    з властивістю friendly = true
__

// -> Створіть об'єкт robby
__

// -> Зробіть machine прототипом robot
__

// -> Зробіть robot прототипом robby
__

// -> Що поверне `robby.motors`?
claim(robby.motors, __);

// -> Що поверне `robby.friendly`?
claim(robby.friendly, __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}
