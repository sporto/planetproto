Our own 'new' part 2
--------------------

Let's make our previous object a bit more ambitious.

Challenge
----------

- Create an object called 'Robot'
- Create a method 'extend' on Robot
- Create a method 'new' on Robot
- Create a method 'init' on Robot
- When Robot.extend is called, simply return a new object with its prototype set to Robot
- When Robot.new is called:
	- create a new object with its prototype set to Robot AND 
	- call init with the parameters passed to new

E.g.

var Droid = Robot.extend();
// Robot is the prototype of Droid

var robby = Droid.new('Rooby');
// Droid is the prototype of robby
// robby received .init with 'Robby'

This is the approach taken in both [Ember.js](http://emberjs.com/) and [uberproto](http://daffl.github.io/uberproto/).


