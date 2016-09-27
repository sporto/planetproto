// -> Створіть три об'єкти: 'machine', 'robot' та 'vehicle'
//    До об'єкту machine додайте властивість 'motors', та встановіть її в null.
__

// -> Зробимо machine прототипом robot та vehicle
vehicle.__proto__ = machine;
robot.__proto__ = machine;

// -> Які значення приймає `machine.motors`, `robot.motors` та `vehicle.motors`?
claim(machine.motors, __);
claim(robot.motors, __);
claim(vehicle.motors, __);

// -> Встановіть властивість `robot.motors` таким, що дорівнює 4
__

// -> Які зараз значення приймають `machine.motors`, `robot.motors` та `vehicle.motors`?
claim(machine.motors, __);
claim(robot.motors, __);
claim(vehicle.motors, __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine:  machine,
	vehicle:  vehicle,
	robot:    robot
}
