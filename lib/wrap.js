var claim = require('./claim');

module.exports = function (ctx) {
	global.claim = claim;
	global.__    = '__';
}

module.exports.wrapSolution = true;
