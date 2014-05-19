var compare = require('./lib/compare');

function Robot() {
	this.parts = [];
}

Robot.prototype.capabilities = [];

var robby = new Robot();
var cranky = new Robot();

compare(robby.parts, []);
compare(cranky.parts, []);
compare(robby.capabilities, []);
compare(cranky.capabilities, []);

robby.parts.push('core');
robby.capabilities.push('fly');

compare(robby.parts, ['core']);
compare(cranky.parts, []);
compare(robby.capabilities, ['fly']);
compare(cranky.capabilities, ['fly']);

module.exports = {
	Robot:  Robot,
	robby:  robby,
	cranky: cranky
}
