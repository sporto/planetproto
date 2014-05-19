The 'function prototype'
------------------------

Every function in JavaScript has a special property called ‘__prototype__’.

```js

	function Alien(){
	}

	Alien.prototype

```

As confusing as it may sound, this ‘__prototype__’ property is not the real prototype (__\_\_proto\_\___) of the function. 

```js

	Alien.__proto__ === Alien.prototype //=> false

```

This of course generates a lot of confusion as people use the term '__prototype__' to refer to different things. 
A good clarifirobotion is to always refer to the special '__prototype__' property of functions as '__the function prototype__', never just '__prototype__'.

**This ‘__prototype__’ property points to the object that will be assigned as the prototype of instances created with that function when using '__new__'.**

Confusing? This is easier to explain with an example:

```js

	function Alien(name) {
		this.name = name;
	}

	// the function Alien has a prototype property
	// we can add properties to this function prototype
	Alien.prototype.kind = 'alien'

	// when we create a new object using new
	var zippy = new Alien('Zippy');
	
	// the prototype of the new object points to alien.prototype
	zippy.__proto__ == Alien.prototype //=> true

	// in the new object we have access to properties defined in Alien.prototype
	zippy.kind //=> alien

```

That is mostly everything there is to know about the JavaScript object model. Understanding how __\_\_proto\_\___ and __function.prototype__ are related will give you countless hours of joy and satisfaction, or maybe not.

Challenge
---------

- Define an 'Machine' function constructor
- Create two instances of Machine: 'robot' and 'vehicle'
- Both robot and vehicle should respond to 'parts' and 'capabilities', these should be empty arrays at first

- Assert the result of robot.parts
- Assert the result of vehicle.parts
- Assert the result of robot.capabilities
- Assert the result of vehicle.capabilities

- Add 'core' to robot.parts, vehicles.parts should still be empty
- Add 'fly' to robot.capabilities, after doing that vehicles.capabilities should also have 'fly' without adding to it directly

- Assert the result of robot.parts
- Assert the result of vehicle.parts
- Assert the result of robot.capabilities
- Assert the result of vehicle.capabilities

Boilerplate
-----------
```js

	var compare = require('./lib/compare');
	... you code here ...

	module.exports = {
		Machine:  Machine,
		robot:    robot,
		vehicle:  vehicle
	}

```


