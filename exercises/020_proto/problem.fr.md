L’objet `__proto__`
===================

Pour comprendre les chaînes de prototypes en JavaScript, l’approche la plus
simple consiste à examiner la propriété `__proto__`.  Malheureusement, celle-
ci ne fait pas officiellement partie du standard pour JavaScript, en tout cas
pas avant au moins ES6.  Aussi, évitez de l’utiliser dans du code de
production.  Mais pour le moment, elle facilite l’explication des prototypes.

```js
// Créons un objet alien
var alien = {
	kind: 'alien'
}

// Et un objet robot
var robot = {
	kind: 'robot'
}

// Et un objet appelé « zippy »
var zippy = {};

// Faisons d’alien le prototype de zippy
zippy.__proto__ = alien

// zippy est désormais lié à alien
// il « hérite » les propriétés d’alien
console.log(zippy.kind); //=> ‘alien’

// Faisons de robot le prototype de zippy
zippy.__proto__ = robot

// et maintenant zippy est lié à robot
console.log(zippy.kind); //=> ‘robot’
```

Comme vous pouvez le voir, la propriété `__proto__` est très simple à
comprendre et à utiliser.  Même si nous devrions éviter d’utiliser `__proto__`
dans du code de production, je trouve que ces exemples fournissent le meilleur
point de départ pour comprendre le modèle objet en JavaScript.

Vous pouvez vérifier qu’un objet est le prototype d’un autre comme suit :

```js
console.log(alien.isPrototypeOf(zippy))
//=> true
```

Défi
----

Un fichier à trous `{boilerplate:020.fr.js}` avec les instructions nécessaires vient d’être
créé pour vous.  Suivez les instructions qui y figurent.
