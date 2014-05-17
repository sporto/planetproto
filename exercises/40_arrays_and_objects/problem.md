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

When you change and array or an object you make the change directly on the object. So the prototype is affected as well.

Challenge
---------

In a program:
- Create three objects: 'animal', 'cat' and 'dog'.
- In the definition of animal set an array 'tricks', make it empty.
- Set the prototype of both cat and dog to animal.
- Log cat.tricks and dog.tricks
- Add a trick to cat by doing cat.tricks.push('....')
- Log cat.tricks and dog.tricks
