'this'は暗黙的に設定されている
-------------------

`new`を使った場合JavaScriptではそのconstructor関数で新しく生成されたオブジェクトを`this`に結びつけます。また関数の最後には暗黙的に`this`を返します。

下のようにした場合：

```js
function Alien() {
	this.kind = 'alien';
}

var zippy = new Alien();
zippy.kind; //=> 'alien'
```

結局は以下をやっているのと同じです：

```js
function Alien() {
	var this = {}; // JavaScriptでこの構文はかけませんが、説明用です
	this.__proto__ = Alien.prototype;
	
	this.kind = 'alien';
	
	return this;
}
```

ただし、`new`を使った場合だけ`this`は新しく生成されたオブジェクトに結び付けられることを念頭においておかねばいけません。`new`を忘れた場合は`this`はグローバルオブジェクトになってしまいます。`new`を忘れた場合は様々なバグを生成する可能性が高いため、`new`は絶対に忘れないようにしましょう。

`new`を忘れないためにもコード規約でconstructor関数の一文字目は大文字にするなどの工夫をしてチェックする必要があります。

課題
---------

問題を解くために090.jsというボイラープレートファイルが用意されています。このファイルに問題を解く為の説明などが含まれています。

