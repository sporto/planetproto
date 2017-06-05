Arreglos y objetos en prototipos
---------------------

Los arreglos y objetos podrían no comportarse como esperas.

Veamos qué pasa cuando modificamos un arreglo:

```js
var alien = {
  skills: ['morph']
};

var zorg = {};
zorg.__proto__ = alien;

zorg.skills.push('clone');

console.log(zorg.skills);
//=> morph, clone
// esperamos esto

console.log(alien.skills);
//=> morph, clone
// quizás no esperábamos esto, pero funciona así porque hemos modificado el
// arreglo del prototipo.
```

Cuando modificas un arreglo u objeto, el cambio se hace directamente sobre el
objeto.

Desafío
-------

Un archivo llamado `050.js` se ha creado automáticamente en el directorio
actual. Este archivo contiene el 'boilerplate' con las instrucciones y los
lugares donde añadir tu código debidamente señalados.
