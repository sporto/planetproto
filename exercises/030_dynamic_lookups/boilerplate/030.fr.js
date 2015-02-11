// -> On définit 3 objets : `machine`, `vehicle` et `robot`
var machine = {}
var vehicle = {}
var robot = {}

// -> Faites de `machine` le prototype de `vehicle`
// -> Faites de `machine` le prototype de `robot`
__

// -> Que vaut `vehicle.motors` ?
claim(vehicle.motors, __);

// -> Que vaut `robot.motors` ?
claim(robot.motors, __);

// -> Définissez une propriété `motors` sur `machine`, qui vaut 4
__

// -> Que vaut `vehicle.motors` désormais ?
claim(vehicle.motors, __);

// -> Que vaut `robot.motors` ?
claim(robot.motors, __);


// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
	machine: machine,
	vehicle: vehicle,
	robot:   robot
}
