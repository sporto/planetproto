// -> 'machine'というオブジェクトを作ってください
var machine = {}

// -> Object.createを使って'robot'というオブジェクトを'machine'をprototypeとして
//    作成してください
__

// -> Object.createを使って'robby'というオブジェクトを'robot'をprototypeとして
//    作成してください
__

// -> `machine.isPrototypeOf(robby)`はどうなりますか？
claim(machine.isPrototypeOf(robby), __);

// -> `robot.isPrototypeOf(robby)`はどうなりますか？
claim(robot.isPrototypeOf(robby), __);

// -> robbyの直接のprototypeに誰になりますか？
claim.same(Object.getPrototypeOf(robby), __);


// ------------------------------------------------
// verify用のCommon JS exportsを定義なので修正しないでください
module.exports = {
	machine:  machine,
	robot:    robot,
	robby:    robby
}
