//iotwoo.js
//การ require แบบมีตัวแปรอ้างอิง
const iotwoo = require('./iotwoo')
const iotwow = require('./iotwow')

console.log(iotwow.sayHello('Eye'));
iotwoo.sayGoodbye('Aphasara', 'Mahawan')
console.log(iotwoo.sumNumber(5, 5));