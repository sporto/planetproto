// -> Créez un objet `machine` avec une propriété `motors` qui vaut 4
__

// -> Créez un objet `robot` avec une propriété `friendly` qui vaut `true`
__

// -> Créez un objet `robby`
__

// -> Faites de `machine` le prototype de `robot`
__

// -> Faites de `robot` le prototype de `robby`
__

// -> Que vaut `robby.motors` ?
claim(robby.motors, __);

// -> Que vaut `robby.friendly` ?
claim(robby.friendly, __);


// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}
