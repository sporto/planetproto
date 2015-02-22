```
888b. 8                   w
8  .8 8 .d88 8d8b. .d88b w8ww
8wwP' 8 8  8 8P Y8 8.dP'  8
8     8 `Y88 8   8 `Y88P  Y8P       ,d
                                    88
8b,dPPYba,  8b,dPPYba,  ,adPPYba, MM88MMM ,adPPYba,
88P'    "8a 88P'   "Y8 a8"     "8a  88   a8"     "8a
88       d8 88         8b       d8  88   8b       d8
88b,   ,a8" 88         "8a,   ,a8"  88,  "8a,   ,a8"
88`YbbdP"'  88          `"YbbdP"'   "Y888 `"YbbdP"'
88
88
```

Objets simples
==============

Il existe de nombreuses manières de créer des objets en JavaScript, mais la
plus simple réside dans les objets littéraux :

```js
var alien = {
	legs: 3
};
```

Défi
----

Écrivez un programme qui :

- Crée un objet appelé `robot` à l’aide d’un objet littéral
- `robot` devrait avoir une propriété `smart` de valeur `true`
- Affirmez le résultat de `robot.smart`

Base de travail
---------------

Un fichier `{boilerplate:010.fr.js}` avec le squelette nécessaire a été créé pour vous.
Il contient les instructions et blancs à remplir pour votre code.

À la fin de chaque fichier à trou vous trouverez un export CommonJS
`modules.exports = ...`. Cela sert à aider le vérificateur, aussi ne
touchez pas à cette partie, s’il vous plaît.

Remarquez les parties `__` du fichier à trous.  Ce sont elles que vous
devez remplacer avec votre propre code.

Affirmations
------------

Parfois les défis vous demandent d’« affirmer » quelque chose.  Nous avons
fourni pour cela une fonction globale `claim`.

Pour faire une affirmation, écrivez `claim(valeurRéelle, valeurAttendue)`,
par exemple :

```js
claim(1 === 1, true);
```

Vérification
------------

Quand vous avez terminé, vous n’avez plus qu’à lancer :

    $ {appname} verify {boilerplate:010.fr.js}

pour continuer.  Votre programme sera testé, un rapport s’affichera, et
la leçon sera marquée comme « faite » si vous avez réussi.
