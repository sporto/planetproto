Fonctions constructeurs
=======================

Les **fonctions constructeurs** sont l’approche JavaScript la plus utilisée
pour construire des chaînes de prototypes.  La popularité des **fonctions
constructeurs** vient du fait qu’il s’agit de la façon d’origine de construire
des types en JavaScript.

Par ailleurs, de nombreux moteurs optimisent fortement les fonctions
constructeurs.

En JavaScript, vous pouvez créer un objet comme ceci :

```js
function Alien() {
	this.age = 10;
}

var zippy = new Alien();
```

Les fonctions utilisées à l’aide de l’opérateur `new` se comportent comme des
fabriques, au sens où elles créent de nouveaux objets.

Le nouvel objet qu’elles créent est lié à la fonction par son prototype, comme
nous le verrons plus tard.  C’est pourquoi on dit qu’en JavaScript cet objet
est une **instance** du constructeur (donc de la fonction).

```js
// `zippy` est une instance de `Alien`
console.log(zippy instanceof Alien) // => true
```

Défi
----

Un fichier à trous `{boilerplate:080.fr.js}` avec les instructions nécessaires vient d’être
créé pour vous.  Suivez les instructions qui y figurent.
