// -> Définissez une fonction constructeur `Robot`.
// -> Dans ce constructeur, définissez une propriété `motors` sur `this`
//    en lui affectant la valeur 2.
// -> Créez une instance de `Robot` appelée `robby`.

function Robot() {
  this.motors = 2;
};

var robby = new Robot();

// -> Que vaut `(robby instanceof Robot)` ?
claim((robby instanceof Robot), true);

// -> Que vaut `robby.motors` ?
claim(robby.motors, 2);

// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
  Robot:  Robot,
  robby:  robby
};
