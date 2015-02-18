// -> Définissez deux fonctions constructeurs : `Robot` et `Vehicle`.
// -> Quand on l’appelle avec `new`, la fonction constructeur `Robot` devrait
//    renvoyer le `this` implicite.
// -> Quand on l’appelle avec `new`, la fonction constructeur `Vehicle` devrait
//    renvoyer un objet créé pour l’occasion par votre code, et pas le `this` implicite.

function Robot() {

}

function Vehicle () {
  return {};
}


// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
  Robot:    Robot,
  Vehicle:  Vehicle
};
