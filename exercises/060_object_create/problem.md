Object.create
---------------

As explained before `__proto__` is not a well supported way of assigning prototypes to objects. So the next simplest way is using `Object.create()`. This is available in ES5, but old browsers/engines can be shimmed using this [es5-shim](https://github.com/kriskowal/es5-shim).

```js
var alien = {
	kind: 'alien'
};

// creates a new object which prototype is alien
var zack = Object.create(alien);

console.log(zack.kind); // => 'alien'
```

You can pass an object to `Object.create` to add specific properties to the new object:

```js
var zack = Object.create(alien, {age: {value:  13} });
console.log(zack.age); // => '13'
```

Yes, the object you need to pass is a bit convoluted, but that is the way it is. See the docs [here](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create).

### `Object.getPrototypeOf`

You can get the prototype of an object by using `Object.getPrototypeOf`:

```js
var zack = Object.create(alien);
Object.getPrototypeOf(zack); //=> alien
```

### `Object.setPrototypeOf`

Newer versions of JavaScript (ES2015) also provide `Object.setPrototypeOf(object, prototype)` as an "official" alternative to changing `__proto__`. However, please keep in mind that changing the prototype on runtime is a very slow operation. It's always better to define the prototype *before* the object is created, e.g. by using `Object.create()`. 

Challenge
---------

Follow the instructions in the boilerplate file created.
A file 060.js with the necessary boilerplate has been created for you.

