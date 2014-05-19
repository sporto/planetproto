var exercise      = require('workshopper-exercise')();
var filecheck     = require('workshopper-exercise/filecheck');
var execute       = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var wrappedexec   = require('workshopper-wrappedexec');
var boilerplate   = require('workshopper-boilerplate');

// create the boilerplate file for the user
exercise = boilerplate(exercise);
exercise.addBoilerplate(require.resolve('./010'));

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

// compare stdout of solution and submission
exercise = comparestdout(exercise);

// wrap up the child process in a phantom wrapper that can
// mess with the global environment and inspect execution
exercise = wrappedexec(exercise);

module.exports = exercise;
