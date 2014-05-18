Constructor Functions
---------------------
__Constructor functions__ are the most used way in JavaScript to construct prototype chains. The popularity of __constructor functions__ comes from the fact that this was the only original way for constructing types. Also many engines are highly optimized for constructor functions.

In JavaScript you can create an object like this:

```js

	function Alien(){
	}

	var zippy = new Alien();

	//zippy is now an instance of Alien
	console.log(zippy instanceof Alien ) //=> true

```

Functions when used with the keyword __new__ behave like factories, meaning that they create new objects.
The new object they create is linked to the function by its prototype, more on this later. So in JavaScript we call this an __instance__ of the function.

Challenge
----------

Write a program that:
- Defines an 'machine' function
- Creates an instance of machine called 'robot'
- Asserts the result of `(robot instanceof machine)`

Boilerplate
-----------
```js
var compare = require('./lib/compare');

... you code here ...

module.exports = {
	machine:  machine,
	robot:     robot
}
```
