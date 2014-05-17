# Prototype lookups are dynamic

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

In a program:
- Define two objects: 'animal' and 'cat'. 
- Make animal the prototype of cat.
- After that, define an 'alive' property on animal, set this to true. 
- Finally log cat.alive.
