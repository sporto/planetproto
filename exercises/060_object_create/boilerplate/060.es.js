// -> Creamos un objeto llamado `machine`
var machine = {};

// -> Usa Object.create para creae otro objeto llamado `robot` con `machine`
//    como prototipo
__

// -> Usa Object.create para crear otro objeto llamado `robby` con `robot`
//    como prototipo
__

// -> Cuál es el resultado de `machine.isPrototypeOf(robby)`?
claim(machine.isPrototypeOf(robby), __);

// -> Cuál es el resultado de `robot.isPrototypeOf(robby)`?
claim(robot.isPrototypeOf(robby), __);

// -> Qué objeto es el prototipo directo de `robby`?
claim.same(Object.getPrototypeOf(robby), __);


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  machine:  machine,
  robot:    robot,
  robby:    robby
}
