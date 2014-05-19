Prototype lookups are dynamic
===================

You can add properties to the prototype of an object at any time, the prototype chain lookup will find the new property as expected.

```js
var alien = {}

var zippy = {}
zippy.__proto__ = alien

// zippy doesn't respond to kind at this point
console.log(zippy.kind); //=> undefined

// let's add kind to alien
alien.kind = 'alien'

// now zippy responds to kind
// because it finds 'kind' in alien
console.log(zippy.kind); //=> 'alien'
```

Challenge
----------

- Define three objects: 'machine' 'vehicle' and 'robot'
- Make machine the prototype of vehicle
- Make machine the prototype of robot
- Claim the result of vehicle.motors (using the compare function)
- Claim the result of robot.motors
- After that, define a 'motors' property on machine, set this to 4
- Claim the result of vehicle.motors again
- Claim the result of robot.motors again

Boilerplate
-----------

A file 030.js with the necessary boilerplate has been created for you.
