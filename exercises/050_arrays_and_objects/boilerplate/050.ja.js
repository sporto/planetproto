// -> 'machine', 'robot'と'vehicle'オブジェクトを作って
// -> machineには'parts'プロパティを空の配列`[]`で設定し、
// -> 'capabilities'プロパティを空のオブジェクト`{}`で設定してください
__

// -> robotとvehicleのprototypeにmachineを設定してください
robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> `robot.parts`はどうなりますか？
claim(robot.parts, __);

// -> `vehicle.parts`はどうなりますか？
claim(vehicle.parts, __);

// -> `robot.capabilities`はどうなりますか？
claim(robot.capabilities, __);

// -> `vehicle.capabilities`はどうなりますか？
claim(vehicle.capabilities, __);

// -> 'core'パーツをrobotのpartsに追加しましょう
robot.parts.push('core');

// -> `robot.parts`はどうなりますか？
claim(robot.parts, __);

// -> `vehicle.parts`はどうなりますか？
claim(vehicle.parts, __);

// -> vehicleに機能を追加しましょう
vehicle.capabilities.fly = true;

// -> `robot.capabilities`はどうなりますか？
claim(robot.capabilities, __);

// -> `vehicle.capabilities`はどうなりますか？
claim(vehicle.capabilities, __);


// ------------------------------------------------
// verify用のCommon JS exportsを定義なので修正しないでください
module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}
