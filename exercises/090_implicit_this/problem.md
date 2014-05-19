'this' is assigned implicitly
-------------------

When we use '__new__' with a function, JavaScript injects an implicit reference to the new object being created in the form of the ‘__this__’ keyword. It also returns this reference implicitly at the end of the function. 

When we do this:

```js
function Alien() {
	this.kind = 'alien'
}

var zippy = new Alien();
zippy.kind //=> 'alien'
```

Behind the scenes it is like doing something like:

```js
function Alien() {
	var this = {}; // this is not valid, just for illustration
	this.__proto__ = Alien.prototype;
	
	this.kind = 'alien'
	
	return this;
}
```

But keep in mind that the implicit '__this__' is only assigned to a new object when using '__new__'. If you forget '__new__' keyword then '__this__' will be the global object. Of course forgetting __new__ is a cause of multiple bugs, so don't forget __new__. 

One popular convention is to capitalize the first letter of a function when it is intented to be used as a function constructor e.g. 'Alien', so you now straightaway to you are missing the __new__ keyword.

Challenge
---------

- Define two constructor functions: 'Machine' and 'Organic'
- When called with 'new', the Machine constructor function should return the implicit 'this'
- When called with 'new', the Organic constructor function should return an object of your own making, not the implicit 'this'.

Boilerplate
-----------
```js
... you code here ...

module.exports = {
	Machine:  Machine,
	Organic:  Organic
}
```

