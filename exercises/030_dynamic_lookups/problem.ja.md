Prototypeの遡り探索は動的
===================

あるオブジェクトのprototypeにはいつでも新たにプロパティを定義することができます。prototype chain探索によって新たに定義されたプロパティは期待通りに見つかります：

```js
var alien = {};

var zippy = {};
zippy.__proto__ = alien;

// この時点でzippyは'kind'を持っていません
console.log(zippy.kind); //=> undefined

// alienに'kind'を加えてみましょう
alien.kind = 'alien';

// これによってzippyは'kind'の値を返すようになります。
// これはprototype chainの遡り探索によってalienの'kind'を見つけるからです。
console.log(zippy.kind); //=> 'alien'
```

ポイント
---------

- オブジェクトはプロパティ探索を自身のprototypeに委譲(delegate)します。
- prototypeはオブジェクト間で共有することもできます。

問題
----------

問題を解くために030.jsというボイラープレートファイルが用意されています。このファイルに問題を解く為の説明などが含まれています。