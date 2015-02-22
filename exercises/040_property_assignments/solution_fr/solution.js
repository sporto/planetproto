// -> Créez trois objets : `machine`, `robot` et `vehicle`
// -> Dans la définition de `machine` définissez une propriété `motors`
//    dont la valeur est `null`.
var machine = {
  motors: null
};

var vehicle = {};

var robot = {};

// -> Faisons de `machine` le prototype de `robot` et `vehicle`
vehicle.__proto__ = machine;
robot.__proto__ = machine;

// -> Que valent `machines.motors`, `robot.motors` et `vehicle.motors` ?
claim(machine.motors, null);
claim(robot.motors, null);
claim(vehicle.motors, null);

// -> Mettez `robot.motors` à 4 avec une affectation directe (`=`)
robot.motors = 4;

// -> Que valent `machines.motors`, `robot.motors` et `vehicle.motors` désormais ?
claim(machine.motors, null);
claim(robot.motors, 4);
claim(vehicle.motors, null);


// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
  machine:  machine,
  vehicle:  vehicle,
  robot:    robot
};
