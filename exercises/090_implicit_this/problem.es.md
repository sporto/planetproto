'this' se asigna implícitamente
-------------------

Cuando usamos `new` con una función, JavaScript inyecta una referencia implícita
al nuevo objeto creado a través de la pseudo-variable `this`. Además, retorna
esta referencia implícitamente al final de la función.

Cuando hacemos esto:

```js
function Alien() {
  this.kind = 'alien';
}

var zippy = new Alien();
zippy.kind; //=> 'alien'
```

Detrás de las cortinas JavaScript hace algo como:

```js
function Alien() {
  var this = {}; // no es JavaScript válido, sólo para ilustrar concepto
  this.__proto__ = Alien.prototype;

  this.kind = 'alien';

  return this;
}
```

Hay que estar atentos al hecho de que `this` sólo se asigna implícitamente al
nuevo objeto cuando usamos el keyword `new`. Si te olvidas de poner `new`, la
pseudo-variable `this` será una referencia al objeto global. Esto hace que `new`
sea una cause común de errores, así que no te olvides de usar `new` cuando sea
necesario.

Una convención popular es poner la primera letra en mayúscula al nombrar la
función (por ejemplo `Alien`), así resulta más fácil identificar el hecho de que
la función debe ser llamada con `new`.

Desafío
-------

Un archivo llamado `090.js` se ha creado automáticamente en el directorio
actual. Este archivo contiene el 'boilerplate' con las instrucciones y los
lugares donde añadir tu código debidamente señalados.
