// -> Créez un objet `machine` avec une propriété `motors` qui vaut 4
var machine = {
  motors: 4
};

// -> Créez un objet `robot` avec une propriété `friendly` qui vaut `true`
var robot = {
  friendly: true
};

// -> Créez un objet `robby`
var robby = {};

// -> Faites de `machine` le prototype de `robot`
robot.__proto__ = machine;

// -> Faites de `robot` le prototype de `robby`
robby.__proto__ = robot;

// -> Que vaut `robby.motors` ?
claim(robby.motors, 4);

// -> Que vaut `robby.friendly` ?
claim(robby.friendly, true);


// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
  machine: machine,
  robot:   robot,
  robby:   robby
}
