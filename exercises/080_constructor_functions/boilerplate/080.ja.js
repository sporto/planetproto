// -> 'Robot'というconstructor関数を定義して
// -> 中身では'this'に'motors'を2として設定してください
// -> 'robby'というRobotのインスタンスを作成してください

__

// -> `(robby instanceof Robot)`はどうなりますか？
claim((robby instanceof Robot), __);

// -> `robby.motors`はどうなりますか？
claim(robby.motors, __);


// ------------------------------------------------
// verify用のCommon JS exportsを定義なので修正しないでください
module.exports = {
	Robot:  Robot,
	robby:  robby
}
