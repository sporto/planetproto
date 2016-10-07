// -> Створіть функцію коструктор 'Robot'
// -> Створіть два екземпляра Robot: 'robby' та 'cranky'
// -> robby та cranky повинні мати властивості 'parts' та 'capabilities'
//    на початку це пусті масиви

__

// -> Що поверне robby.parts
claim(robby.parts, __);
// -> А що cranky.parts
claim(cranky.parts, __);
// -> Що поверне robby.capabilities
claim(robby.capabilities, __);
// -> А що cranky.capabilities
claim(cranky.capabilities, __);

// -> Додайте 'core' до robby.parts, cranky.parts при цьому має залишитися пустим
// -> Додайте 'fly' до robby.capabilities, але cranky.capabilities також повінно отримати 'fly',
//    але, не можна додавати 'fly' напряму до cranky.capabilities. Ця властивість має бути розподіленою.

__

// -> Що поверне robby.parts
claim(robby.parts, __);
// -> А що cranky.parts
claim(cranky.parts, __);
// -> Що поверне robby.capabilities
claim(robby.capabilities, __);
// -> А що cranky.capabilities
claim(cranky.capabilities, __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:  Robot,
	robby:  robby,
	cranky: cranky
}
