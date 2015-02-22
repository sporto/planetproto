// -> Créons un objet appelé `machine`
var machine = {}

// -> Utilisez `Object.create` pour créer un autre objet appelé `robot` dont
//    le prototype serait `machine`
__

// -> Utilisez `Object.create` pour créer un autre objet appelé `robby` dont
//    le prototype serait `robot`
__

// -> Que vaut `machine.isPrototypeOf(robby)` ?
claim(machine.isPrototypeOf(robby), __);

// -> Que vaut `robot.isPrototypeOf(robby)` ?
claim(robot.isPrototypeOf(robby), __);

// -> Quel objet est le prototype direct de `robby` ?
claim.same(Object.getPrototypeOf(robby), __);


// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
	machine:  machine,
	robot:    robot,
	robby:    robby
};
