var exercise      = require('workshopper-exercise')();
var filecheck     = require('workshopper-exercise/filecheck');
var execute       = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var helpers       = require('../../lib/helpers');
var verify        = require('./verify');

// create the boilerplate file for the user
exercise = boilerplate(exercise);
exercise.addBoilerplate(require.resolve('./080'));

// checks that the submission file actually exists
exercise = filecheck(exercise);

// add a processor only for 'verify' calls
exercise.addVerifyProcessor(function (verifyCallback) {
	var exercise = this;

	helpers.requireUserModule(exercise, function (err, userMod) {

		if (err) {
			console.log(err);
			exercise.emit('fail', err);
			return verifyCallback(null, false);
		}

		return verify(exercise, userMod, verifyCallback);
	});

});

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

// compare stdout of solution and submission
exercise = comparestdout(exercise);

module.exports = exercise;
