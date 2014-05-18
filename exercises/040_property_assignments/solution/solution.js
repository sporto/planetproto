var compare = require('../../../lib/compare');

var animal = {
	legs: null
};

var dog = {};

var cat = {};

dog.__proto__ = animal;
cat.__proto__ = animal;

compare(animal.legs, null);
compare(cat.legs, null);
compare(dog.legs, null);

cat.legs = 4;

compare(animal.legs, null);
compare(cat.legs, 4);
compare(dog.legs, null);

module.exports = {
	animal: animal,
	dog:    dog,
	cat:    cat
}
