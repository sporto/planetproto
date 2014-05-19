Constructor Functions
---------------------
__Constructor functions__ are the most used way in JavaScript to construct prototype chains. The popularity of __constructor functions__ comes from the fact that this was the only original way for constructing types initially.
Also many engines are highly optimized for constructor functions.

In JavaScript you can create an object like this:

```js
function Alien() {
	this.age = 10;
}

var zippy = new Alien();
```

Functions when used with the keyword __new__ behave like factories, meaning that they create new objects.
The new object they create is linked to the function by its prototype, more on this later. So in JavaScript we call this an __instance__ of the function.

```js
// zippy is an instance of Alien
console.log(zippy instanceof Alien) //=> true
```

Challenge
----------

- Define a 'Robot' function
- Inside the Robot constructor assign a property 'motors' on 'this', set this to 2
- Create an instance of Robot called 'robby'
- Claim the result of `(robby instanceof Robot)`
- Claim the result of robby.motors

Boilerplate
-----------

A file 080.js with the necessary boilerplate has been created for you.
