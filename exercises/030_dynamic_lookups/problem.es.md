Las búsquedas en el prototipo son dinámicas
===================

Puedes añadir propiedades al prototipo de un objeto en cualquier momento. La
cadena de prototipos (prototype chain) encontrará la nueva propiedad:

```js
var alien = {};

var zippy = {};
zippy.__proto__ = alien;

// zippy no resuelve (encuentra) una propiedad 'kind' en este punto
console.log(zippy.kind); //=> undefined

// añadimos 'kind' a alien
alien.kind = 'alien';

// ahora zippy si resuelve 'kind'
// porque lo encuentra en 'alien'
console.log(zippy.kind); //=> 'alien'
```

Conclusiones
---------

- Los objetos delegan la resolución/búsqueda (lookup) de propiedades a su prototipo
- Un prototipo puede ser compartido entre varios objetos

Desafío
-------

Un archivo llamado `030.js` se ha creado automáticamente en el directorio
actual. Este archivo contiene el 'boilerplate' con las instrucciones y los
lugares donde añadir tu código debidamente señalados.
