\_\_proto\_\_ オブジェクトについて
------------------

prototype chainについて理解する為には`__proto__`プロパティが一番の近道です。残念なことに`__proto__`はES6までは標準化されていない為、プロダクションで使うのは非推奨とされています。ただし、prototypeの説明を簡単にしてくれます。

```js
// alienオブジェクトを作って
var alien = {
	kind: 'alien'
};

// robotoオブジェクトも作ります
var robot = {
	kind: 'robot'
};

// そして'zippy'というオブジェクトを作ります
var zippy = {};

// zippyのprototypeとしてalienを指定します
zippy.__proto__ = alien;

// zippyはalienとリンクされて
// alienのプロパティを'継承'します
console.log(zippy.kind); //=> 'alien'

// robotをzippyのprototypeとして指定します
zippy.__proto__ = robot;

// 今度はzippyはrobotとリンクされます
console.log(zippy.kind); //=> 'robot'
```

上のコードを見てわかるように、`__proto__`プロパティは理解するのも使うのも容易です。確かにプロダクションで`__proto__`は非推奨ですが、JavaScriptのオブジェクトモデルを知る上でこう言った例はとても有用だと思います。

あるオブジェクトが、ある違うオブジェクトのprototypeかどうか確認する方法として以下があります：

```js
	console.log(alien.isPrototypeOf(zippy));
	//=> true
```

問題
----------

問題を解くために020.jsというボイラープレートファイルが用意されています。このファイルに問題を解く為の説明などが含まれています。