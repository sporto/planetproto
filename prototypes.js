#!/usr/bin/env node

"use strict"

var Workshopper = require('workshopper')
var path = require('path')

Workshopper({
	name   : 'js-prototypes',
	title  : 'A guide to JS prototypes',
	appDir : path.join(__dirname)
}).init();