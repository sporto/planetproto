Prototype lookups are dynamic
===================

You can add properties to the prototype of an object at any time, the prototype chain lookup will find the new property as expected:

```js
var alien = {};

var zippy = {};
zippy.__proto__ = alien;

// zippy doesn't respond to 'kind' at this point
console.log(zippy.kind); //=> undefined

// let's add 'kind' to alien
alien.kind = 'alien';

// now zippy responds to 'kind'
// because it finds 'kind' in alien
console.log(zippy.kind); //=> 'alien'
```

Key points
---------

- Objects delegate property lookups to their prototype
- A prototype can be shared between objects

Challenge
----------

Follow the instructions in the boilerplate file created.
A file 030.js with the necessary boilerplate has been created for you.
