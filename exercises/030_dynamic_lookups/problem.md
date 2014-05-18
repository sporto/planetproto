Prototype lookups are dynamic
===================

You can add properties to the prototype of an object at any time, the prototype chain lookup will find the new property as expected.

```js
	var person = {}
	
	var zack = {}
	zack.__proto__ = person
	
	// zack doesn't respond to kind at this point
	console.log(zack.kind); //=> undefined
	
	// let's add kind to person
	person.kind = 'person'
	
	// now zack responds to kind
	// because it finds 'kind' in person
	console.log(zack.kind); //=> 'person'
```

Challenge
----------

- Define three objects: 'animal' 'dog' and 'cat'
- Make animal the prototype of dog
- Make animal the prototype of cat
- Assert the result of dog.legs (using the compare function)
- Assert the result of cat.legs
- After that, define a 'legs' property on animal, set this to 4
- Assert the result of dog.legs again
- Assert the result of cat.legs again

Boilerplate
-----------

```js
var compare = require('./lib/compare');

... you code here ...

module.exports = {
	animal: animal,
	dog:    dog,
	cat:    cat
}
```
