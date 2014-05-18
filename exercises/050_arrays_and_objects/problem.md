Arrays and objects in prototypes
---------------------

Arrays and objects may not behave as you expect them. 

Let's see what happens when you modify an array:

```js
	var person = {
		hobbies: ['swimming']
	}

	var zack = {}
	zack.__proto__ = person

	zack.hobbies.push('programming')

	console.log(zack.hobbies);
	//=> swimming, programming
	// we expected this

	console.log(person.hobbies); 
	//=> swimming, programming
	// maybe we didn't expect this, we have modified the array in the prototype object.
```

When you change and array or an object you make the change directly on the object.

Challenge
---------

Write a program that:

- Creates three objects: 'animal', 'cat' and 'dog'
- In the definition of animal sets an property 'tricks', set it to an empty array `[]`
- In the definition of animal sets a property 'abilities', set it to an empty object `{}`
- Sets the prototype of both cat and dog to animal

- Asserts the result of cat.tricks
- Asserts the result of dog.tricks
- Asserts the result of cat.abilities
- Asserts the result of dog.abilities

- Adds a 'roll' trick to cat by doing `cat.tricks.push('roll')`
- Adds an ability to dog by doing `dog.abilities.walk = true`

- Asserts the result of cat.tricks
- Asserts the result of dog.tricks
- Asserts the result of cat.abilities
- Asserts the result of dog.abilities

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
