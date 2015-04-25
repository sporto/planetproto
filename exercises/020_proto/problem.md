The \_\_proto\_\_ object
------------------

To understand prototype chains in JavaScript there is nothing as simple as the `__proto__` property. Unfortunately `__proto__` is not part of the standard interface of JavaScript, at least not until ES6. So you shouldn't use it in production code. However it makes explaining prototypes easy.

```js
// let's create an alien object
var alien = {
	kind: 'alien'
};

// and a robot object
var robot = {
	kind: 'robot'
};

// and an object called 'zippy'
var zippy = {};

// assign alien as the prototype of zippy
zippy.__proto__ = alien;

// zippy is now linked to alien
// it 'inherits' the properties of alien
console.log(zippy.kind); //=> 'alien'

// assign robot as the prototype of zippy
zippy.__proto__ = robot;

// and now zippy is linked to robot
console.log(zippy.kind); //=> 'robot'
```

As you can see the `__proto__` property is very straightforward to understand and use. Even if we shouldn't use `__proto__` in production code, I think that these examples give the best foundation to understand the JavaScript object model.

You can check that one object is the prototype of another by doing:

```js
	console.log(alien.isPrototypeOf(zippy));
	//=> true
```

Challenge
----------

Follow the instructions in the boilerplate file created. 
A file 020.js with the necessary boilerplate has been created for you.
