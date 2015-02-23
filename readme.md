<img src="http://cl.ly/image/2M273e1D2F0I/logo.png" alt="logo" />

Understanding JavaScript Prototypes - Workshop

<img src="http://cl.ly/image/2g0Y2y0r2241/planetproto.png" alt="screenshot" />

## Mission

The goal of this workshop is to help you understand the object model in Javascript by learning how prototypes work.

Most guides / tutorials start explaining JavaScript objects by going directly to ‘__constructor functions__’, this workshop is different, it starts simple by explaining prototype chains and building from there.

**Please read the exercises thoroughly and follow all conditions, they are there to help you learn!**

## What you will learn

- What are prototypes chains
- Message delegation in a prototype chain
- What are function constructors
- What are function prototypes and how to work with them

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
supply some boilerplate with which to get started.

Many challenges will ask you to make a 'claim'. We have provided `claim` as a global function.
To make a claim write `claim(actual, expected)`, e.g.:

```js
claim(1 === 1, true);
```
 
#### 3. Verifying your solution

Your solution will be verified against the output of the 'official' solution. 
If all of the output matches, then you have successfully solved the problem!

```
$ planetproto verify mysolution.js
```

## Stuck?

Feedback and criticism is welcome, please log your troubles in [issues](https://github.com/sporto/planetproto/issues). 

## Development

Run `node planetproto.js` to run the workshop
Run `node planetproto.js verify 010.js` to verify a submission


## Thanks rvagg

This tutorial was built using rvagg's [workshopper](https://github.com/rvagg/workshopper) framework.

## Licence

MIT

Robot designed by Ricardo Moreira from the Noun Project
