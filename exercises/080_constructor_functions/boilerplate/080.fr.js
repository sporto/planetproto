// -> Définissez une fonction constructeur `Robot`.
// -> Dans ce constructeur, définissez une propriété `motors` sur `this`
//    en lui affectant la valeur 2.
// -> Créez une instance de `Robot` appelée `robby`.

__

// -> Que vaut `(robby instanceof Robot)` ?
claim((robby instanceof Robot), __);

// -> Que vaut `robby.motors` ?
claim(robby.motors, __);

// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
	Robot:  Robot,
	robby:  robby
};
