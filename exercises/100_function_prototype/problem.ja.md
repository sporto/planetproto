'関数のprototype'について
------------------------

JavaScriptの全ての関数には`prototype`というプロパティがあります。

```js
function Alien() {}

Alien.prototype;
```

紛らわしいことに、この`prototype`プロパティは、関数の本当のprototype (`__proto__`) ではありません。

```js
Alien.__proto__ === Alien.prototype; //=> false
```

言うまでもありませんが、`prototype`が指すものが人によって違ったりするので様々な混乱が生まれます。この混乱を生まない為にも関数の`prototype`プロパティについては `__関数のprototype__`、と必ず呼ぶべきで、単純に`prototype`とは呼んではいけません。

この`prototype`プロパティは、`new`で呼ばれた関数によって生成されたオブジェクトを指します。

ややこしいですよね？例を使って説明した方がわかりやすいです：

```js
function Alien(name) {
	this.name = name;
}

// Alien関数はprototypeプロパティをもっています
// この関数のprototypeにプロパティを追加することができます
Alien.prototype.kind = 'alien';

// 'new'を使って新しいオブジェクトを生成したときに
var zippy = new Alien('Zippy');

// 新しく生成されたオブジェクトの__proto__はAlien.prototypeを指します
zippy.__proto__ == Alien.prototype; //=> true

// 新しく生成されたオブジェクトからAlien.prototypeに定義されているプロパティにアクセス可能です
zippy.kind; //=> alien
```

[ここ](https://docs.google.com/drawings/d/1AKJcvxs0t3iGtqkRV8rFAWlo7tojkOSwjfhr1NWaTb0/pub?w=889&h=482)に関連図があります。

このことから`Alien`のインスタンスを2つ作った場合、両方のインスタンスで`Alien.prototype`が`__proto__`として設定されます。よって、`Alien.prototype`で定義したものは生成されたインスタンス同士ですべて共有されます。

以上でJavaScriptのオブジェクトモデルについて知っておくべきことは学習しました。`__proto__`と`function.prototype`の関連を理解することで得も言われぬ喜びと満足な時間が生まれる、かもしれません。

問題
---------

問題を解くために090.jsというボイラープレートファイルが用意されています。このファイルに問題を解く為の説明などが含まれています。


