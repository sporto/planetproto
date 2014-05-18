Object.create
---------------

As explained before __\_\_proto\_\___ is not a well supported way of assigning prototypes to objects. So the next simplest way is using __Object.create()__. This is available in ES5, but old browsers / engines can be shimmed using this [es5-shim](https://github.com/kriskowal/es5-shim).

```js
var alien = {
	kind: 'alien'
}

// creates a new object which prototype is alien
var zack = Object.create(alien);

console.log(zack.kind); // => ‘alien’
```

You can pass an object to Object.create to add specific properties for the new object

```js
var zack = Object.create(alien, {age: {value:  13} });
console.log(zack.age); // => ‘13’
```

Yes, the object you need to pass is a bit convoluted, but that is the way it is. See the docs [here](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create).

### Object.getPrototype

You can get the prototype of an object using Object.getPrototypeOf

```js
var zack = Object.create(alien);
Object.getPrototypeOf(zack); //=> alien
```

There is no such thing as Object.setPrototype.

Challenge
---------

- Create an object called 'machine'
- Use Object.create to create another object called 'robot' with 'machine' set as the prototype
- Use Object.create to create another object called 'robby' with 'robot' as the prototype
- Assert the result of `machine.isPrototypeOf(robby)`
- Assert the results of `Object.getPrototypeOf(robby)`

Boilerplate
-----------
```js
var compare = require('./lib/compare');

... you code here ...

module.exports = {
	machine:  machine,
	robot:    robot,
	robby:    robby
}
```

