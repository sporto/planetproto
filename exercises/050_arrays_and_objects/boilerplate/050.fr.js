// -> Créez trois objets : `machine`, `robot` et `vehicle`
// -> Dans la définition de `machine` définissez une propriété `parts`
//    et donnez-lui comme valeur un tableau vide `[]`
// -> Dans la définition de `machine` toujours, définissez une propriété
//    `capabilities` et donnez-lui comme valeur un objet vide `{}`
__

// -> Changeons le prototype de `robot` et `vehicle` pour utiliser `machine`
robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> Que vaut `robot.parts` ?
claim(robot.parts, __);

// -> Que vaut `vehicle.parts` ?
claim(vehicle.parts, __);

// -> Que vaut `robot.capabilities` ?
claim(robot.capabilities, __);

// -> Que vaut `vehicle.capabilities` ?
claim(vehicle.capabilities, __);

// -> Ajoutons une pièce 'core' au robot
robot.parts.push('core');

// -> Que vaut `robot.parts` désormais ?
claim(robot.parts, __);

// -> Que vaut `vehicle.parts` désormais ?
claim(vehicle.parts, __);

// -> Ajoutons une compétence au véhicule
vehicle.capabilities.fly = true;

// -> Que vaut `robot.capabilities` désormais ?
claim(robot.capabilities, __);

// -> Que vaut `vehicle.capabilities` désormais ?
claim(vehicle.capabilities, __);


// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
	machine: machine,
	vehicle: vehicle,
	robot:   robot
};
