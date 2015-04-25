Arrays and objects in prototypes
---------------------

Arrays and objects may not behave as you expect them to behave.

Let's see what happens when you modify an array:

```js
var alien = {
	skills: ['morph']
};

var zorg = {};
zorg.__proto__ = alien;

zorg.skills.push('clone');

console.log(zorg.skills);
//=> morph, clone
// we expected this

console.log(alien.skills);
//=> morph, clone
// maybe we didn't expect this, but it works like that
// because we have modified the array in the prototype object.
```

When you change an array or an object you make the change directly on the object.

Challenge
---------

Follow the instructions in the boilerplate file created. 
A file 050.js with the necessary boilerplate has been created for you.
