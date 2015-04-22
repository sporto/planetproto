```
888b. 8                   w   
8  .8 8 .d88 8d8b. .d88b w8ww 
8wwP' 8 8  8 8P Y8 8.dP'  8   
8     8 `Y88 8   8 `Y88P  Y8P       ,d
                                    88
8b,dPPYba,  8b,dPPYba,  ,adPPYba, MM88MMM ,adPPYba,
88P'    "8a 88P'   "Y8 a8"     "8a  88   a8"     "8a
88       d8 88         8b       d8  88   8b       d8
88b,   ,a8" 88         "8a,   ,a8"  88,  "8a,   ,a8"
88`YbbdP"'  88          `"YbbdP"'   "Y888 `"YbbdP"'
88
88
```

Simple objects
=============

There are many ways of creating objects in JavaScript, but the simplest way is
by using object literals:

```js
var alien = {
	legs: 3
};
```

Challenge
--------

Write a program that:

- Create an object called 'robot' using an object literal
- robot should have a property 'smart' with value true
- Claim the result robot.smart

Boilerplate
-----------

A file 010.js with the necessary boilerplate has been created for you. This 
file contains the instructions and placeholders for your code.

At the end of each boilerplate you will see a common js export 
`modules.exports = ...`. This is there to aid the verifier, please don't modify
that section.

Note the `__` placeholders in the boilerplate. You should replace this with your own code.

Claims
-----

Sometimes the challenge will ask you to make a claim. We have provided `claim` as 
a global function.

To make a claim write `claim(actual, expected)`, e.g.:

```js
claim(1 === 1, true);
```

Verification
------

When you are done, you must run:

$ {appname} verify 010.js
to proceed. Your program will be tested, a report will be generated, and the 
lesson will be marked 'completed' if you are successful.

