プロパティの代入について
====================

prototypeに既に存在するプロパティを更新した場合はどうなるのでしょう？見てみましょう：

```js
var alien = {
	kind: 'alien'
};

var zippy = {};
zippy.__proto__ = alien;

zippy.kind = 'zippy';

console.log(zippy.kind); //=> 'zippy'
// zippyが'kind'プロパティを自分自身に持つようになりました

console.log(alien.kind); //=> 'alien'
// 逆に、alienには何も変化が起きません
```

プロパティが新規に、あるいは更新された場合は対象となるオブジェクト自身のプロパティに代入されます。prototypeのプロパティに変化はありません。
`kind`というプロパティは`alien`と`zippy`両方に存在しているということに注意してください。

問題
---------


問題を解くために040.jsというボイラープレートファイルが用意されています。このファイルに問題を解く為の説明などが含まれています。