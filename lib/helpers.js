function requireUserModule(exercise, callback) {
	// console.log(exercise);
	var userFile = exercise.args[0];
	var userFullpath = exercise.wrapData.mainProgram;
	// var userFullpath = exercise.workshopper.appDir + '/../../' + userFile;
	var userMod;

	try {
		userMod = require(userFullpath);
	} catch (e) {
		// exercise.emit('fail', 'Error loading module: ' + e.message)
		return callback('Error loading module: ' + e.message);
	}

	// console.log('Module loaded')

	return callback(null, userMod);
}

function makeVerificator(exercise, errors) {
	return function (msg, runner) {
		try{
			runner();
			exercise.emit('pass', msg);
		} catch (e) {
			errors.push(msg);
			exercise.emit('fail', msg);
		}
	}
}

module.exports = {
	requireUserModule: requireUserModule,
	makeVerificator:   makeVerificator
}
