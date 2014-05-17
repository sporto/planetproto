The 'function prototype'
------------------------

Every function in JavaScript has a special property called ‘__prototype__’.

```js
	function Foo(){
	}

	Foo.prototype
```

As confusing as it may sound, this ‘__prototype__’ property is not the real prototype (__\_\_proto\_\___) of the function. 

```js
	Foo.__proto__ === Foo.prototype //=> false
```

This of course generates a lot of confusion as people use the term '__prototype__' to refer to different things. 
A good clarification is to always refer to the special '__prototype__' property of functions as '__the function prototype__', never just '__prototype__'.

This ‘__prototype__’ property points to the object that will be asigned as the prototype of instances created with that function when using '__new__'. Confusing? This is easier to explain with an example:

```js
	function Person(name) {
		this.name = name;
	}

	// the function person has a prototype property
	// we can add properties to this function prototype
	Person.prototype.kind = ‘person’

	// when we create a new object using new
	var zack = new Person(‘Zack’);
	
	// the prototype of the new object points to person.prototype
	zack.__proto__ == Person.prototype //=> true

	// in the new object we have access to properties defined in Person.prototype
	zack.kind //=> person
```

That is mostly everything there is to know about the JavaScript object model. Understanding how __\_\_proto\_\___ and __function.prototype__ are related will give you countless hours of joy and satisfaction, or maybe not.

Challenge
---------

Write a program that:
- Defines an 'Animal' function constructor
- Creates two instances of Animal: 'cat' and 'dog'
- Both cat and dog should have two arrays: 'tricks' and 'abilities' they both should be empty at first
- Add 'roll' to cat.tricks, dogs.tricks should still be empty
- Add 'walk' to cat.abilities, dogs.abilities should also have 'walk' without adding to it directly


