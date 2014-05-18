The \_\_proto\_\_ object
------------------

To understand prototype chains in JavaScript there is nothing as simple as the __\_\_proto\_\___ property. Unfortunately __\_\_proto\_\___ is not part of the standard interface of JavaScript, not at least until ES6. So you shouldn't use it in production code. But anyway it makes explaining prototypes easy.

```js
	// let's create an alien object
	var alien = {
		kind: 'alien'
	}

	// and a person object
	var person = {
		kind: 'person'
	}

	// and an object called 'zack'
	var zack = {};

	// assign alien as the prototype of zack
	zack.__proto__ = alien
	
	// zack is now linked to alien
	// it 'inherits' the properties of alien
	console.log(zack.kind); //=> ‘alien’

	// assign person as the prototype of zack
	zack.__proto__ = person
	
	// and now zack is linked to person
	console.log(zack.kind); //=> ‘person’
```

As you can see the __\_\_proto\_\___ property is very straightforward to understand and use. Even if we shouldn't use __\_\_proto\_\___ in production code, I think that these examples give the best foundation to understand the JavaScript object model.

You can check that one object is the prototype of another by doing:

```js
	console.log(alien.isPrototypeOf(zack))
	//=> true
```

Challenge
----------

Build a program that:
- Creates three objects: 'animal', 'cat' and 'felix'.
- Makes animal the prototype of cat.
- Makes cat the prototype of felix.
- Adds a property 'legs' to animal with value of 4
- Adds a property 'cute' to cat with value true
- Asserts the result of felix.legs and felix.cute

Boilerplate
-----------

```js
var assert = require('assert');
... you code here ...

module.exports = {
	animal: animal,
	cat:    cat,
	felix:  felix
}
```
