// -> 'machine', 'robot', 'vehicle'を定義して
//    'machine'には'motors'というプロパティをnullで定義してください
__

// -> machineをrobotとvehicleのプロトタイプにしましょう
vehicle.__proto__ = machine;
robot.__proto__ = machine;

// -> `machine.motors`, `robot.motors`と`vehicle.motors`はそれぞれどうなりますか？
claim(machine.motors, __);
claim(robot.motors, __);
claim(vehicle.motors, __);

// -> `robot.motors`に4を代入してください
__

// -> 今度は`machine.motors`, `robot.motors`と`vehicle.motors`はどうなりますか？
claim(machine.motors, __);
claim(robot.motors, __);
claim(vehicle.motors, __);


// ------------------------------------------------
// verify用のCommon JS exportsを定義なので修正しないでください
module.exports = {
	machine:  machine,
	vehicle:  vehicle,
	robot:    robot
}
