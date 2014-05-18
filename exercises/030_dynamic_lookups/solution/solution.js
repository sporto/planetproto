var compare = require('../../../lib/compare');

var animal = {}

var dog = {}

var cat = {}

dog.__proto__ = animal;
cat.__proto__ = animal;

compare(dog.legs, undefined);
compare(cat.legs, undefined);

animal.legs = 4;

compare(dog.legs, 4);
compare(cat.legs, 4);


module.exports = {
	animal: animal,
	dog:    dog,
	cat:    cat
}
