// -> Створіть три об'єкти: 'machine', 'robot' та 'vehicle'
// -> До об'єкту machine додайте властивість 'parts', 
//    такою що дорівнює пустому масиву `[]`
// -> До об'єкту machine додайте властивість 'capabilities',
//    такою що дорівнює пустому об'єкту `{}`
__

// -> Встановимо machine прототипом до 'robot' та 'vehicle'
robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> Що поверне `robot.parts`?
claim(robot.parts, __);

// -> Що поверне `vehicle.parts`?
claim(vehicle.parts, __);

// -> Що поверне `robot.capabilities`?
claim(robot.capabilities, __);

// -> Що поверне `vehicle.capabilities`?
claim(vehicle.capabilities, __);

// -> А що, як додати  'core' до part від robot
robot.parts.push('core');

// -> Що поверне `robot.parts` зараз?
claim(robot.parts, __);

// -> А що в `vehicle.parts`?
claim(vehicle.parts, __);

// -> Встановимо властивість ability до vehicle
vehicle.capabilities.fly = true;

// -> Що в `robot.capabilities` зараз?
claim(robot.capabilities, __);

// -> А в `vehicle.capabilities`?
claim(vehicle.capabilities, __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}
