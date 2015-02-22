// -> Créez trois objets : `machine`, `robot` et `vehicle`
// -> Dans la définition de `machine` définissez une propriété `motors`
//    dont la valeur est `null`.
__

// -> Faisons de `machine` le prototype de `robot` et `vehicle`
vehicle.__proto__ = machine;
robot.__proto__ = machine;

// -> Que valent `machines.motors`, `robot.motors` et `vehicle.motors` ?
claim(machine.motors, __);
claim(robot.motors, __);
claim(vehicle.motors, __);

// -> Mettez `robot.motors` à 4 avec une affectation directe (`=`)
__

// -> Que valent `machines.motors`, `robot.motors` et `vehicle.motors` désormais ?
claim(machine.motors, __);
claim(robot.motors, __);
claim(vehicle.motors, __);


// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
	machine:  machine,
	vehicle:  vehicle,
	robot:    robot
};
