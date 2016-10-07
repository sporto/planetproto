// -> Створіть об'єкт 'machine'
var machine = {}

// -> Скористуйтеся Object.create для того, щоб створити новий об'єкт 'robot' з 
// 	  'machine' в якості прототипу

__

// -> За допомогою Object.create своріть ще один об'єкт 'robby' з 'robot' 
//    в якості прототипу
__

// -> Що поверне `machine.isPrototypeOf(robby)`?
claim(machine.isPrototypeOf(robby), __);

// -> Що поверне `robot.isPrototypeOf(robby)`?
claim(robot.isPrototypeOf(robby), __);

// -> Який об'єкт є прямим нащадком robby?
claim.same(Object.getPrototypeOf(robby), __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine:  machine,
	robot:    robot,
	robby:    robby
}
