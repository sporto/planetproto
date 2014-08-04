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

Follow the instructions in the boilerplate file created. 
A file 050.js with the necessary boilerplate has been created for you.
