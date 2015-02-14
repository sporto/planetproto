Les lookups sur prototype sont dynamiques
=========================================

Vous pouvez ajouter des propriétés au prototype d’un objet à tout moment : le
lookup à travers la chaîne de prototypes les trouvera correctement.

```js
var alien = {}

var zippy = {}
zippy.__proto__ = alien

// zippy ne répond pas encore sur `kind` à ce stade
console.log(zippy.kind); //=> undefined

// ajoutons `kind` à alien
alien.kind = 'alien'

// à présent zippy répond à `kind`
// parce qu’il trouve `kind` dans alien
console.log(zippy.kind); //=> 'alien'
```

Points-clés
-----------

- Les objets délèguent leur lookup de propriété à leur prototype.
- Un prototype peut être partagé par plusieurs objets.

Défi
----

Un fichier à trous `{boilerplate:030.fr.js}` avec les instructions nécessaires
vient d’être créé pour vous.  Suivez les instructions qui y figurent.
