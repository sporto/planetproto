Object.create
---------------

Como comentamos anteriormente, `__proto__` no es una manera estándar de asignar
prototipos. La siguiente manera más sencilla es usando `Object.create()`, que
está disponible en ES5, y en los navegadores antiguos podemos usar
[es5-shim](https://github.com/kriskowal/es5-shim).

```js
var alien = {
  kind: 'alien'
};

// creamos un nuevo objeto con `alien` como prototipo
var zack = Object.create(alien);

console.log(zack.kind); // => 'alien'
```

Podemos pasar un objeto a `Object.create` para añadir propiedades al nuevo
objeto:

```js
var zack = Object.create(alien, {age: {value:  13} });
console.log(zack.age); // => '13'
```

Sí, el objeto que tenemos que pasar es un poco complicado, pero así es. Puedes
ver más en la [documentación oficial](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create).

### `Object.getPrototypeOf`

Puedes acceder al prototipo de un objeto usando `Object.getPrototypeOf`:

```js
var zack = Object.create(alien);
Object.getPrototypeOf(zack); //=> alien
```

### `Object.setPrototypeOf`

A partir de ES2015, también tenemos `Object.setPrototypeOf(object, prototype)`
como una alternativa oficial para cambiar la propiedad `__proto__`. Aún así,
no es recomendable alterar el prototipo durante la ejecución ya que es un
proceso lento. Siempre es mejor definir el prototipo *antes* de crear el objeto,
por ejemplo usando `Object.create()`.

Desafío
-------

Un archivo llamado `060.js` se ha creado automáticamente en el directorio
actual. Este archivo contiene el 'boilerplate' con las instrucciones y los
lugares donde añadir tu código debidamente señalados.
