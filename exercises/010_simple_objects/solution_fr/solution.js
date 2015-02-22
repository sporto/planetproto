// -> Créez un objet appelé `robot` à l’aide d’un objet littéral
// -> `robot` devrait avoir une propriété `smart` qui vaut `true`
var robot = {
  smart: true
}

// -> Affirmez le résultat de `robot.smart`
claim(robot.smart, true);

// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
  robot: robot
}
