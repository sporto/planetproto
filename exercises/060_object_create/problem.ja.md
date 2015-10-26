Object.create
---------------

前述していたように`__proto__`はprototypeを設定する方法としては推奨されていません。`__proto__`の次に簡単な方法として`Object.create()`というものがあります。ES5からサポートされていますが、古いブラウザなどでは[es5-shim](https://github.com/kriskowal/es5-shim)を使って利用できるようになります。

```js
var alien = {
	kind: 'alien'
};

// 新しいオブジェクトをalienをprototypeとして設定して作ります
var zack = Object.create(alien);

console.log(zack.kind); // => 'alien'
```

`Object.create`にオブジェクトを渡して、新しいオブジェクトに特定のプロパティを追加することもできます：

```js
var zack = Object.create(alien, {age: {value:  13} });
console.log(zack.age); // => '13'
```

指定しないといけないオブジェクトは少々複雑ですが、これが仕様です。詳しくは[こちら](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create)のドキュメントを一読ください。

### `Object.getPrototypeOf`

`Object.getPrototypeOf`を使ってあるオブジェクトのprototypeを取得することができます：

```js
var zack = Object.create(alien);
Object.getPrototypeOf(zack); //=> alien
```

### `Object.setPrototypeOf`

ES2015では`__proto__`の代替として`Object.setPrototypeOf(object, prototype)`を"公式"に採用しています。ただし、prototypeを実行時に変更するのはコストが高いということを知っておく必要があります。どんなときでもprototypeはオブジェクトの *作成前* に(`Object.create()`を使って）定義したほうが良いです。

問題
---------

問題を解くために060.jsというボイラープレートファイルが用意されています。このファイルに問題を解く為の説明などが含まれています。

