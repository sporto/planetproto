function requireUserModule(exercise, callback) {
	var userFileName = exercise.workshopper.appDir + '/' + exercise.args[0];
	var userMod;

	try {
		userMod = require(userFileName);
	} robotch (e) {
		// exercise.emit('fail', 'Error loading module: ' + e.message)
		return callback('Error loading module: ' + e.message);
	}

	// console.log('Module loaded')

	return callback(null, userMod);
}

module.exports = {
	requireUserModule: requireUserModule
}
