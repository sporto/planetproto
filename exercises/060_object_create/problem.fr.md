Object.create
=============

Comme expliqué précédemment, `__proto__` n’est pas une manière bien prise en
charge d’affecter un prototype à des objets.  Du coup, la manière la plus
simple qui nous reste utilise `Object.create()`.  C’est disponible à partir
d’ES5, mais pour les navigateurs ou moteurs plus anciens, on peut utiliser
[es5-shim](https://github.com/kriskowal/es5-shim) pour en disposer.

```js
var alien = {
	kind: 'alien'
}

// Crée un nouvel objet dont le prototype est `alien`
var zack = Object.create(alien);

console.log(zack.kind); // => 'alien'
```

Vous pouvez passer un objet à `Object.create` pour ajouter des propriétés
spécifiques au nouvel objet.

```js
var zack = Object.create(alien, { age: { value: 13 } });
console.log(zack.age); // => '13'
```

C’est vrai, l’objet à passer peut sembler un peu compliqué, mais c’est comme
ça.  Consultez la documentation officielle [ici](https://developer.mozilla.org
/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/create).

`Object.getPrototypeOf`
-----------------------

On peut récupérer le prototype d’un objet avec `Object.getPrototypeOf`.

```js
var zack = Object.create(alien);
Object.getPrototypeOf(zack); //=> alien
```

En revanche, on ne trouve pas d’API `Object.setPrototype`.

Défi
----

Un fichier à trous `{boilerplate:060.fr.js}` avec les instructions nécessaires vient d’être
créé pour vous.  Suivez les instructions qui y figurent.
