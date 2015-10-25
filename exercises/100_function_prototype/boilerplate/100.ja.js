// -> 'Robot'というconstructor関数を定義してください
// -> Robotのインスタンス2つ、それぞれ'robby', 'cranky'で定義してください
// -> robbyとcrankyはそれぞれ'partsと'capabilities'に対して結果を返せるようにしてください
//    初期値は空の配列としてください

__

// -> robby.partsはどうなりますか？
claim(robby.parts, __);
// -> cranky.partsはどうなりますか？
claim(cranky.parts, __);
// -> robby.capabilitiesはどうなりますか？
claim(robby.capabilities, __);
// -> cranky.capabilitiesはどうなりますか？
claim(cranky.capabilities, __);

// -> robby.partsに'core'を追加してください。このときcranky.partsはまだ空の配列です
// -> robby.capabilitiesに'fly'を追加してください。このときにcranky.capabilitiesも
//    'fly'をもたなければいけません（直接追加してはいけません）。つまり、このプロパティは
//    共有されていなければいけません。

__

// -> robby.partsはどうなりますか？
claim(robby.parts, __);
// -> cranky.partsはどうなりますか？
claim(cranky.parts, __);
// -> robby.capabilitiesはどうなりますか？
claim(robby.capabilities, __);
// -> cranky.capabilitiesはどうなりますか？
claim(cranky.capabilities, __);


// ------------------------------------------------
// verify用のCommon JS exportsを定義なので修正しないでください
module.exports = {
	Robot:  Robot,
	robby:  robby,
	cranky: cranky
}
