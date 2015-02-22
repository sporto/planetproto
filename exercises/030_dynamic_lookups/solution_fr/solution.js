// -> On définit 3 objets : `machine`, `vehicle` et `robot`
var machine = {}
var vehicle = {}
var robot = {}

// -> Faites de `machine` le prototype de `vehicle`
// -> Faites de `machine` le prototype de `robot`
vehicle.__proto__ = machine;
robot.__proto__ = machine;

// -> Que vaut `vehicle.motors` ?
claim(vehicle.motors, undefined);

// -> Que vaut `robot.motors` ?
claim(robot.motors, undefined);

// -> Définissez une propriété `motors` sur `machine`, qui vaut 4
machine.motors = 4;

// -> Que vaut `vehicle.motors` désormais ?
claim(vehicle.motors, 4);

// -> Que vaut `robot.motors` ?
claim(robot.motors, 4);

// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
  machine: machine,
  vehicle: vehicle,
  robot:   robot
}
