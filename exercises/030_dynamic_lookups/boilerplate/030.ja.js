// -> 'machine' 'vehicle' 'robot'というオブジェクトを定義します
var machine = {}
var vehicle = {}
var robot = {}

// -> machineをvehicleのprototypeにして
// -> machineをrobotのprototypeにもしてください
__

// -> `vehicle.motor`はどうなりますか？
claim(vehicle.motors, __);

// -> `robot.motors`はどうなりますか？
claim(robot.motors, __);

// -> machineオブジェクトに'motors'プロパティを4という値で設定してください
__

// -> `vehicle.motors`はどうなりますか？
claim(vehicle.motors, __);

// -> `robot.motors`はどうなりますか？
claim(robot.motors, __);


// ------------------------------------------------
// verify用のCommon JS exportsを定義なので修正しないでください
module.exports = {
	machine: machine,
	vehicle: vehicle,
	robot:   robot
}
