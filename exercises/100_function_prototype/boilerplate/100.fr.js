// -> Définissez une fonction constructeur `Robot`.
// -> Créez deux instances de `Robot` : `robby` et `cranky`.
// -> Tant `robby` que `cranky` devraient disposer de `parts` et `capabilities`,
//    lesquelles devraient être des tableaux vides au départ.

__

// -> Que vaut `robby.parts` ?
claim(robby.parts, __);
// -> Que vaut `cranky.parts` ?
claim(cranky.parts, __);
// -> Que vaut `robby.capabilities` ?
claim(robby.capabilities, __);
// -> Que vaut `cranky.capabilities` ?
claim(cranky.capabilities, __);

// -> Ajoutez 'core' à `robby.parts`.  `cranky.parts` devraient toujours être vide.
// -> Ajoutez 'fly' à `robby.capabilities`, après quoi `cranky.capabilities` doit
//    aussi avoir 'fly' sans l’y avoir directement ajouté, ce qui signifie que cette
//    propriété doit être partagée.

__

// -> Que vaut `robby.parts` ?
claim(robby.parts, __);
// -> Que vaut `cranky.parts` ?
claim(cranky.parts, __);
// -> Que vaut `robby.capabilities` ?
claim(robby.capabilities, __);
// -> Que vaut `cranky.capabilities` ?
claim(cranky.capabilities, __);


// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
	Robot:  Robot,
	robby:  robby,
	cranky: cranky
};
