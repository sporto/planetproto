var filecheck     = require('workshopper-exercise/filecheck');
var boilerplate   = require('workshopper-boilerplate');
var execute       = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var wrappedexec   = require('workshopper-wrappedexec');
var helpers       = require('./helpers');

function setup (exercise, args) {

	if (!args.dir) throw new Error("missing args.dir");
	if (!args.code) throw new Error("missing args.code");

	// create the boilerplate file for the user
	exercise = boilerplate(exercise);
	exercise.addBoilerplate(require.resolve(args.dir + '/boilerplate/' + args.code));

	// checks that the submission file actually exists
	exercise = filecheck(exercise);

	// execute the solution and submission in parallel with spawn()
	exercise = execute(exercise);

	// compare stdout of solution and submission
	exercise = comparestdout(exercise);

	// wrap up the child process in a phantom wrapper that can
	// mess with the global environment and inspect execution
	exercise = wrappedexec(exercise);

	// a module we want run just prior to the submission in the
	// child process
	// add claims and __
	exercise.wrapModule(require.resolve('./wrap'));

	// add the claim global for later
	// otherwise when loading the user module, claim will not be found
	// this needs to be repeated for the verification
	global.claim = require('./claim');
	global.__ = '__';

	var suite = require(args.dir + '/suite');

	function processVerifyOrRun(verifyOrRun, verifyOrRunCallback) {
		// console.log('processVerifyOrRun')

		// we need to inspect the exports from the user module
		// so require it before verification
		helpers.requireUserModule(exercise, function (err, userMod) {
			// console.log('onRequireUserModule');

			if (err) {
				// console.log(err);
				exercise.emit('fail', err);
				return verifyOrRunCallback(null, false);
			}

			return verifyOrRun(exercise, userMod, verifyOrRunCallback);
		});
	}

	exercise.addVerifyProcessor(processVerifyOrRun.bind(null, suite.verify));
	exercise.addRunProcessor(processVerifyOrRun.bind(null, suite.run));

	return exercise;
}

module.exports = setup;
