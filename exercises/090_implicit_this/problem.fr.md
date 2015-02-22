`this` est défini implicitement
===============================

Quand nous utilisons `new` avec une fonction, JavaScript injecte une référence
implicit dans le nouvel objet créé sous la forme du mot-clé `this`.  Il
renvoie également cette référence implicitement à la fin de la fonction.

Quand nous faisons ceci :

```js
function Alien() {
	this.kind = 'alien';
}

var zippy = new Alien();
zippy.kind // => 'alien'
```

Sous le capot, c’est comme si nous faisions ceci :

```js
function Alien() {
	var this = {}; // ce n’est pas du JS valide, juste pour illustrer
	this.__proto__ = Alien.prototype;

	this.kind = 'alien';

	return this;
}
```

Mais gardez à l’esprit que le `this` implicite n’est affecté au nouvel objet
que si vous utilisez `new`.  Si vous oubliez le mot-clé `new`, alors `this`
vaudra l’objet global (sauf si vous êtes en mode strict, auquel cas il sera
`undefined`).  Naturellement, oublier `new` cause de nombreux problèmes, aussi
assurez-vous de bien l’utiliser pour construire vos objets à l’aide de
fonctions constructeurs.

Une convention très répandue consiste à mettre la première lettre du nom de la
fonction en majuscule quand elle est censée être utilisée comme constructeur,
par exemple `Alien`.  De cette façon, vous savez tout de suite qu’elle doit
être appelée avec l’opérateur `new`.

Défi
----

Un fichier à trous `{boilerplate:090.fr.js}` avec les instructions nécessaires vient d’être
créé pour vous.  Suivez les instructions qui y figurent.
