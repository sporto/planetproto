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

Objetos Simples
===============

Hay muchas formas de crear objetos en JavaScript, pero la más sencilla es usando
objetos "literales":

```js
var alien = {
  legs: 3
};
```

Desafío
-------

Escribe un programa que haga lo siguiente:

- Crea un objeto que se llame `robot` usando un objeto literal
- `robot` debe tener una propiedad llamada `smart` con un valor `true`
- Reclama el resultado `robot.smart`

Boilerplate
-----------

Un archivo llamado `010.js` se ha creado automáticamente en el directorio
actual. Este archivo contiene el 'boilerplate' con las instrucciones y los
lugares donde añadir tu código debidamente señalados.

Al final de cada `boilerplate` verás un export de common.js
`modules.exports = ...`. Esto está ahí para ayudar al verificador, por favor no
modifiques esa sección.

Fíjate en los placeholders `__` en el boilerplate. Debes reemplazarlos con tu
propio código.

Claims
-----

A veces el challenge te pedirá que hagas un 'claim'. Hemos incluido una función
global `claim` para hacer estos 'claims'.

Para hacer un claim escribe `claim(actual, expected)`, por ejemplo:

```js
claim(1 === 1, true);
```

Verificación
------

Cuando termines, debes ejecutar los siguiente:

$ {appname} verify 010.js

Tu programa se verificará, se generará un informe, y el ejercicio aparecerá como
'completado' si todo está correcto.
