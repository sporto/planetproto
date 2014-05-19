var compare = require('./lib/compare');

function Robot() {
	this.motors = 2;
};

var robby = new Robot();

compare((robby instanceof Robot), true);
compare(robby.motors, 2);

module.exports = {
	Robot:   Robot,
	robby:   robby
}
