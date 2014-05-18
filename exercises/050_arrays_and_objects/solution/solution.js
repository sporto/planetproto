var compare = require('../../../lib/compare');

var animal = {
	tricks: [],
	abilities: {}
};

var dog = {};
var cat = {};

cat.__proto__ = animal;
dog.__proto__ = animal;

compare(cat.tricks, []);
compare(dog.tricks, []);
compare(cat.abilities, {});
compare(dog.abilities, {});

cat.tricks.push('roll');
dog.abilities.walk = true;

compare(cat.tricks, ['roll']);
compare(dog.tricks, ['roll']);
compare(cat.abilities, {walk: true});
compare(dog.abilities, {walk: true});

module.exports = {
	animal: animal,
	dog:    dog,
	cat:    cat
}
