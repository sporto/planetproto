// -> Définissez une fonction constructeur `Robot`.
// -> Créez deux instances de `Robot` : `robby` et `cranky`.
// -> Tant `robby` que `cranky` devraient disposer de `parts` et `capabilities`,
//    lesquelles devraient être des tableaux vides au départ.

function Robot() {
  this.parts = [];
}

Robot.prototype.capabilities = [];

var robby = new Robot();
var cranky = new Robot();

// -> Que vaut `robby.parts` ?
claim(robby.parts, []);
// -> Que vaut `cranky.parts` ?
claim(cranky.parts, []);
// -> Que vaut `robby.capabilities` ?
claim(robby.capabilities, []);
// -> Que vaut `cranky.capabilities` ?
claim(cranky.capabilities, []);

// -> Ajoutez 'core' à `robby.parts`.  `cranky.parts` devraient toujours être vide.
// -> Ajoutez 'fly' à `robby.capabilities`, après quoi `cranky.capabilities` doit
//    aussi avoir 'fly' sans l’y avoir directement ajouté, ce qui signifie que cette
//    propriété doit être partagée.

robby.parts.push('core');
robby.capabilities.push('fly');

// -> Que vaut `robby.parts` ?
claim(robby.parts, ['core']);
// -> Que vaut `cranky.parts` ?
claim(cranky.parts, []);
// -> Que vaut `robby.capabilities` ?
claim(robby.capabilities, ['fly']);
// -> Que vaut `cranky.capabilities` ?
claim(cranky.capabilities, ['fly']);


// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
  Robot:  Robot,
  robby:  robby,
  cranky: cranky
};
