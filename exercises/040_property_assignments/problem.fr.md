Affectation de propriétés
=========================

Qu’arrive-t-il si on met à jour une propriété qui existe déjà sur le
prototype ?  Voyons voir :

```js
var alien = {
	kind: 'alien'
}

var zippy = {}
zippy.__proto__ = alien

zippy.kind = 'zippy'

console.log(zippy.kind); // => 'zippy'
// zippy a désormais une propriété `kind`

console.log(alien.kind); // => 'alien'
// alien n’a pas été modifié
```

Les propriétés nouvelles ou mises à jour sont créées sur l’objet, pas sur le
prototype. Notez que la propriété `kind` existe désormais aussi bien dans
`alien` que dans `zippy`.

Défi
----

Un fichier à trous `{boilerplate:040.fr.js}` avec les instructions nécessaires vient d’être
créé pour vous.  Suivez les instructions qui y figurent.
