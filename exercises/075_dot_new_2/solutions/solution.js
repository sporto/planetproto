var Robot = {
	extend: function (args) {
		var obj =  Object.create(this);
		for (a in args) {
			obj[a] = args[a];
		}
		return obj;
	},
	new: function (name) {
		var obj = Object.create(this);
		obj.init(name);
		return obj;
	},
	init: function () {
		
	}
}

var Droid = Robot.extend({
	init: function (name) {
		this.name = name
	}
});

var robby = Droid.new('Robby');


module.exports = {
	Robot: Robot
}
