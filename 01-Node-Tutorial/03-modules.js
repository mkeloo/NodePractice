// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const names = require('./04-names');
const { john, peter } = require('./04-names');
const sayHi = require('./05-utils');
const hello = sayHi;
const data = require('./06-alternative-syntax');
require('./07-mind-grenade');
const values = require('./07-mind-grenade');
// console.log(names);

hello('susan');
// sayHi(names.john);
// sayHi(names.peter);
sayHi(john);
sayHi(peter);
console.log(data);
console.log(values);
