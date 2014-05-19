Arrays and objects in prototypes
---------------------

Arrays and objects may not behave as you expect them. 

Let's see what happens when you modify an array:

```js

	var alien = {
		skills: ['morhp']
	}

	var zorg = {}
	zorg.__proto__ = alien

	zorg.skills.push('clone')

	console.log(zorg.skills);
	//=> morhp, clone
	// we expected this

	console.log(alien.skills);
	//=> morhp, clone
	// maybe we didn't expect this, we have modified the array in the prototype object.

```

When you change and array or an object you make the change directly on the object.

Challenge
---------

Write a program that:

- Creates three objects: 'machine', 'robot' and 'vehicle'
- In the definition of machine sets a property 'parts', set it to an empty array `[]`
- In the definition of machine sets a property 'capabilities', set it to an empty object `{}`
- Sets the prototype of both robot and vehicle to machine
- Sets the prototype of both robot and vehicle to machine

- Asserts the result of robot.parts
- Asserts the result of vehicle.parts
- Asserts the result of robot.capabilities
- Asserts the result of vehicle.capabilities

- Add a 'core' part to robot by doing `robot.parts.push('core')`
- Add an ability to vehicle by doing `vehicle.capabilities.fly = true`

- Asserts the result of robot.parts
- Asserts the result of vehicle.parts
- Asserts the result of robot.capabilities
- Asserts the result of vehicle.capabilities

Boilerplate
-----------

```js
var compare = require('./lib/compare');
... you code here ...

module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}
```
