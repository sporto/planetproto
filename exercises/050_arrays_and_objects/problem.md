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

- Create three objects: 'machine', 'robot' and 'vehicle'
- In the definition of machine set a property 'parts', set it to an empty array `[]`
- In the definition of machine set a property 'capabilities', set it to an empty object `{}`
- Set the prototype of both robot and vehicle to machine
- Set the prototype of both robot and vehicle to machine
- Claim the result of robot.parts
- Claim the result of vehicle.parts
- Claim the result of robot.capabilities
- Claim the result of vehicle.capabilities
- Add a 'core' part to robot by doing `robot.parts.push('core')`
- Add an ability to vehicle by doing `vehicle.capabilities.fly = true`
- Claim the result of robot.parts
- Claim the result of vehicle.parts
- Claim the result of robot.capabilities
- Claim the result of vehicle.capabilities

Boilerplate
-----------

A file 050.js with the necessary boilerplate has been created for you.
