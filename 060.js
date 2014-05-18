var compare = require('./lib/compare');

var machine = {}

var robot = {};

var robby = {};

robot.__proto__ = machine;
robby.__proto__ = robot;

module.exports = {
    machine:  machine,
    robot:    robot,
    robby:    robby
}
