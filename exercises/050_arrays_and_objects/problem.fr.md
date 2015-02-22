Tableaux et Objets dans les prototypes
======================================

Les tableaux et objets risquent de ne pas se comporter comme vous pourriez
vous y attendre.

Voyons ce qui arrive quand on modifie un tableau :

```js
var alien = {
	skills: ['morph']
}

var zorg = {}
zorg.__proto__ = alien

zorg.skills.push('clone')

console.log(zorg.skills);
// => morph, clone
// C'est bien ce à quoi on s’attend

console.log(alien.skills);
// => morph, clone
// Ah, on pouvait ne pas s’attendre à ça : on a modifié le tableau au sein de
// l’objet prototype.
```

Quand vous changez un tableau ou un objet, ce changement est partagé, car
central au niveau du prototype.

Défi
----

Un fichier à trous `{boilerplate:050.fr.js}` avec les instructions nécessaires vient d’être
créé pour vous.  Suivez les instructions qui y figurent.
