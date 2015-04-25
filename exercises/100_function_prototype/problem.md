The 'function prototype'
------------------------

Every function in JavaScript has a special property called `prototype`.

```js
function Alien() {}

Alien.prototype;
```

As confusing as it may sound, this `prototype` property is not the real prototype (`__proto__`) of the function.

```js
Alien.__proto__ === Alien.prototype; //=> false
```

This of course generates a lot of confusion as people use the term 'prototype' to refer to different things.
A good clarification is to always refer to the special `prototype` property of functions as '__the function prototype__', never just 'prototype'.

This `prototype` property points to the object that will be assigned as the prototype of instances created with that function when using `new`.

Confusing? This is easier to explain with an example:

```js
function Alien(name) {
	this.name = name;
}

// the function Alien has a prototype property
// we can add properties to this function prototype
Alien.prototype.kind = 'alien';

// when we create a new object using 'new'
var zippy = new Alien('Zippy');

// the __proto__ of the new object points to Alien.prototype
zippy.__proto__ == Alien.prototype; //=> true

// in the new object we have access to properties defined in Alien.prototype
zippy.kind; //=> alien
```

Here is a [diagram showing this relationship](https://docs.google.com/drawings/d/1AKJcvxs0t3iGtqkRV8rFAWlo7tojkOSwjfhr1NWaTb0/pub?w=889&h=482).

So if you create two instances of `Alien`, both will get `Alien.prototype` as their `__proto__`. So whatever you put there will be shared by the instances.

That is mostly everything there is to know about the JavaScript object model. Understanding how `__proto__` and `function.prototype` are related will give you countless hours of joy and satisfaction. Or maybe not.

Challenge
---------

Follow the instructions in the boilerplate file created.
A file 100.js with the necessary boilerplate has been created for you.


