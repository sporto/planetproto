Planet Proto
=============

Understanding JavaScript Prototypes - Workshop

## Mission

When I first started learning about JavaScript object model my reaction was of horror and disbelief. I was totally puzzled by its prototype nature as it was my first encounter with a prototype based language. I didn't help that JavaScript has a unique take on prototypes as it adds the concept of __function constructors__. I bet that many of you have had similar experience.

But as I used JavaScript more I didn't just learn to understand its object model but also started love parts of it. Thanks to JavaScript I have find out the elegance and flexibility of prototypes languages. I am now quite fond of prototype languages because they have a simpler and more flexible object model than class based languages.

Most guides / tutorials start explaining JavaScript objects by going directly to ‘__constructor functions__’, I think this is a mistake, as they introduce a fairly complex concept early on making Javascript look difficult and confusing from the start. Let's leave this for later. First let's start with the basics of prototypes.

The goal of this workshop is to help you understand the object model in Javascript by learning how prototypes work.

**Please read the exercises thoroughly and obey all conditions, they are there to help you learn!**

## Installation & Update

```
$ npm install -g planetproto@latest
```

Some npm installations require use of `sudo` in the above command. Recommend to instead [reinstall node/npm so you don't need sudo](https://gist.github.com/isaacs/579814).

## Usage Instructions

#### 1. Selecting a problem to work on

Once the workshop is installed, run `planetproto` to print a menu
where you can select a problem to work on.

```
$ planetproto
```

Problems are listed in rough order of difficulty. You are advised to complete them in order, as later problems
will build on skills developed by solving previous problems.

#### 2. Writing your solution

Once you have selected a problem, the workshop will remember which problem you are working on. 
Using your preferred editor, simply create a file to write your solution in. Most problems will
supply some boilerplate with which to get started. Copy this from the problem description to your
solution file.

#### 3. Testing your solution

Use the workshop's `run` command to point the workshop at your solution file. Your solution will loaded 
and passed the problem input. This usually won't perform any validation, it will only show the program output.

```
$ planetproto run mysolution.js
```
 
#### 4. Verifying your solution

Your solution will be verified against the output of the 'official' solution. 
If all of the output matches, then you have successfully solved the problem!

```
$ planetproto verify mysolution.js
```

## Stuck?

Feedback and criticism is welcome, please log your troubles in [issues](https://github.com/sporto/planetproto/issues). 


## Thanks rvagg

This tutorial was built using rvagg's [workshopper](https://github.com/rvagg/workshopper) framework.

## Licence

MIT
