var path = require('path');

function requireUserModule(exercise, callback) {
	// exercise.args[0] contains the given file name e.g. '010.js'

	var userFullPath = exercise.args[0];
	// var userFullPath = exercise.wrapData.mainProgram; <- this works only on verify

	var userMod;

	try {
		userMod = require(path.resolve(userFullPath));
	} catch (e) {
		return callback('Error loading module: ' + e.message);
	}

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
