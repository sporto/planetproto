var compare = require('../../../lib/compare');

var animal = {
	legs: 4
};

var cat = {
	cute: true
};

var felix = {};

cat.__proto__ = animal;

felix.__proto__ = cat;

compare(felix.legs, 4);
compare(felix.cute, true);

module.exports = {
	animal: animal,
	cat:    cat,
	felix:  felix
}
