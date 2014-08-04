// -> Define a 'Robot' function constructor
// -> Create two instances of Robot: 'robby' and 'cranky'
// -> Both robby and cranky should respond to 'parts' and 'capabilities', these 
//    should be empty arrays at first

__

// -> Claim the result of robby.parts
claim(robby.parts, __);
// -> Claim the result of cranky.parts
claim(cranky.parts, __);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, __);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, __);

// -> Add 'core' to robby.parts, cranky.parts should still be empty
// -> Add 'fly' to robby.capabilities, after doing that cranky.capabilities must 
//    also have 'fly' without adding to it directly, so this property has to be 
//    shared

__

// -> Claim the result of robby.parts
claim(robby.parts, __);
// -> Claim the result of cranky.parts
claim(cranky.parts, __);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, __);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:  Robot,
	robby:  robby,
	cranky: cranky
}
