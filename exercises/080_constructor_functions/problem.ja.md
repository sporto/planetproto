Constructor関数
---------------------
JavaScriptでは __Constructor関数__ を使ってprototype chainを作ることがほとんどです。なぜほとんどの人がこの方法を使うかと言うと、元々一般的に新しいタイプを作る方法がこれしかなかったことと、エンジン側がconstructor関数の最適化をかなり行っていたことに起因しています。

JavaScriptでは以下のようにしてオブジェクトを作成することができます：

```js
function Alien() {
	this.age = 10;
}

var zippy = new Alien();
```

`new`が関数の前につくと、その関数はファクトリのように動作します。要するに新しいオブジェクトを生成するのです。
新しく生成されたオブジェクトは、その関数のprototypeとリンクされるようになります。これについては後ほど詳しく述べます。JavaScriptではこれをその関数の __instance__ と呼びます。

```js
// zippyはAlienのインスタンスです
console.log(zippy instanceof Alien); //=> true
```

問題
----------

問題を解くために080.jsというボイラープレートファイルが用意されています。このファイルに問題を解く為の説明などが含まれています。
