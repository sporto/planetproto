function Robot() {
	this.motors = 2;
};

var robby = new Robot();

claim((robby instanceof Robot), true);
claim(robby.motors, 2);

module.exports = {
	Robot:   Robot,
	robby:   robby
}
