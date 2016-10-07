// -> визначемо три об'єкти : 'machine' 'vehicle' та 'robot'
var machine = {}
var vehicle = {}
var robot = {}

// -> Зробимо machine прототипом vehicle
// -> Зробимо machine прототипом robot
__

// -> Що поверне `vehicle.motors`?
claim(vehicle.motors, __);

// -> Що поверне `robot.motors`?
claim(robot.motors, __);

// -> Додайте властивість'motors' до machine, і встановіть їй значення 4
__

// -> Що поверне `vehicle.motors` зараз?
claim(vehicle.motors, __);

// -> А що `robot.motors`?
claim(robot.motors, __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	vehicle: vehicle,
	robot:   robot
}
