var claim = require('./claim');

module.exports = function (ctx) {
	global.claim = claim;
}
module.exports.wrapSolution = true;
