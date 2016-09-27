// -> Створіть функцію конструктор 'Robot'
// -> Всередині Robot творіть властивість 'motors' у 'this',
//    встановіть motors такою, що дорівнює 2.
// -> Створіть екземпляр Robot на ім'я 'robby'

__

// -> Що поверне `(robby instanceof Robot)`?
claim((robby instanceof Robot), __);

// -> А що `robby.motors`?
claim(robby.motors, __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:  Robot,
	robby:  robby
}
