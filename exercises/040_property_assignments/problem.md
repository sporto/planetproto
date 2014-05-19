Property Assignments
====================

What happens if you update a property that already exists in the prototype? Let's see:

```js
var alien = {
	kind: 'alien'
}

var zippy = {}
zippy.__proto__ = alien

zippy.kind = 'zippy'

console.log(zippy.kind); //=> 'zippy'
// zippy now has a 'kind' property

console.log(alien.kind); //=> 'alien'
// alien has not being modified
```

New / updated properties are assigned to the object, not to the prototype
Note that the property 'kind' now exists in both alien and zippy.

Challenge
---------

- Define three objects: 'machine', 'robot' and 'vehicle'
- In the definition of machine add a property 'motors' set to null.
- Make machine the prototype of robot and vehicle
- Claim machines.motors, robot.motors and vehicle.motors (in that order)
- Set robot.motors to 4 by direct assignment
- Claim again machines.motors, robot.motors and vehicle.motors (in that order)

Boilerplate
-----------

A file 040.js with the necessary boilerplate has been created for you.
