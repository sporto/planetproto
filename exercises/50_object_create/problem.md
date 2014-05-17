Object.create
---------------

As explained before __\_\_proto\_\___ is not a well supported way of assigning prototypes to objects. So the next simplest way is using __Object.create()__. This is available in ES5, but old browsers / engines can be shimmed using this [es5-shim](https://github.com/kriskowal/es5-shim).

```js
	var person = {
		kind: 'person'
	}

	// creates a new object which prototype is person
	var zack = Object.create(person);

	console.log(zack.kind); // => ‘person’
```

You can pass an object to Object.create to add specific properties for the new object

```js
	var zack = Object.create(person, {age: {value:  13} });
	console.log(zack.age); // => ‘13’
```

Yes, the object you need to pass is a bit convoluted, but that is the way it is. See the docs [here](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create).

### Object.getPrototype

You can get the prototype of an object using Object.getPrototypeOf

```js
	var zack = Object.create(person);
	Object.getPrototypeOf(zack); //=> person
```

There is no such thing as Object.setPrototype.

Challenge
---------

In a program:
- Create an object called 'animal' with a 'legs' property set to null
- Create another object called 'cat' with 'animal' set as the prototype, by using Object.create
- Log cat.legs
