Le prototype de fonction
========================

Chaque fonction JavaScript a une propriété spéciale appelée `prototype`.

```js
function Alien(){
}

Alien.prototype
```

Aussi déstabilisant que cela puisse paraître, cette propriété `prototype`
n'est pas le prototype (`__proto__`) de la fonction.

```js
Alien.__proto__ === Alien.prototype // => false
```

Évidemment, ça engendre beaucoup de confusion quand les gens utilisent le
terme `prototype` pour parler de plusieurs choses différentes.

Une bonne manière de clarifier les choses consiste à parler de la propriété
`prototype` des fonctions en tant que « prototype de fonction », et pas juste
« prototype ».

**Cette propriété `prototype` pointe sur l’objet qui sera affecté comme
prototype aux instances créées en appelant la fonction avec l’opérateur
`new`.**

Vous n’y comprenez rien ?  Ça devrait être plus clair avec un exemple :

```js
function Alien(name) {
	this.name = name;
}

// La fonction `Alien` a une propriété `prototype` sur laquelle
// on peut ajouter des propriétés.
Alien.prototype.kind = 'alien'

// Quand on crée un objet à l’aide de `new`…
var zippy = new Alien('Zippy');

// … le `__proto__` du nouvel objet pointe sur `Alien.prototype`.
zippy.__proto__ === Alien.prototype // => true

// Dans le nouvel objet, on a accès aux propriétés définies dans `Alien.prototype`.
zippy.kind // => 'alien'
```

Voici un [diagramme qui illustre cette relation](https://docs.google.com/drawings/d/1AKJcvxs0t3iGtqkRV8rFAWlo7tojkOSwjfhr1NWaTb0/pub?w=889&h=482).

Alors, si vous créez deux instances de `Alien`, les deux auront
`Alien.prototype` comme valeur pour leur `__proto__`.  Du coup tout ce que
vous y mettrez sera partagé par les instances.

Voilà l’essentiel de ce que vous devez savoir sur le modèle objet en
JavaScript.  Comprendre comment `__proto__` et `function.prototype` sont
reliés vous apportera d’innombrables heures de joie et de satisfaction…  ou
peut-être pas.

Défi
----

Un fichier à trous `{boilerplate:100.fr.js}` avec les instructions nécessaires vient d’être
créé pour vous.  Suivez les instructions qui y figurent.
