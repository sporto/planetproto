// -> Créons un objet appelé `machine`
var machine = {}

// -> Utilisez `Object.create` pour créer un autre objet appelé `robot` dont
//    le prototype serait `machine`
var robot = Object.create(machine);

// -> Utilisez `Object.create` pour créer un autre objet appelé `robby` dont
//    le prototype serait `robot`
var robby = Object.create(robot);

// -> Que vaut `machine.isPrototypeOf(robby)` ?
claim(machine.isPrototypeOf(robby), true);

// -> Que vaut `robot.isPrototypeOf(robby)` ?
claim(robot.isPrototypeOf(robby), true);

// -> Quel objet est le prototype direct de `robby` ?
claim.same(Object.getPrototypeOf(robby), robot);


// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
  machine:  machine,
  robot:    robot,
  robby:    robby
};
