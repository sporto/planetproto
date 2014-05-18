Constructor Functions
---------------------
__Constructor functions__ are the most used way in JavaScript to construct prototype chains. The popularity of __constructor functions__ comes from the fact that this was the only original way for constructing types. Also many engines are highly optimized for constructor functions.

In JavaScript you can create an object like this:

```js
	function Foo(){
	}

	var foo = new Foo();

	//foo is now an instance of Foo
	console.log(foo instanceof Foo ) //=> true
```

Functions when used with the keyword __new__ behave like factories, meaning that they create new objects.
The new object they create is linked to the function by its prototype, more on this later. So in JavaScript we call this an __instance__ of the function.

Challenge
----------

Write a program that:
- Defines an 'Animal' function
- Creates an instance of Animal called 'cat'
- Asserts the result of `(cat instanceof Animal)`

Boilerplate
-----------
```js
var compare = require('./lib/compare');

... you code here ...

module.exports = {
	Animal:  Animal,
	cat:     cat
}
```
