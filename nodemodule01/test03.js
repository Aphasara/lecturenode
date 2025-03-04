//เวลาใช้งานก็ใช้ชื่อคำสั่งนั้นเลยโดยไม่ต้องเอาชื่อตัวแปรนั้นๆมาอ้างอิงแล้ว
//กำหนดไปเลยว่าจะใช้ตัวแปรไหน
const {sayHello, sayHi} = require('./iotwow')
const {sumNumber} = require('./iotwoo')

//สร้างเป็นตัวแปรอ้างอิง ก็ต้องเอาไป.ด้วย บรรทัดต่อไป
const iotwee = require('./iotwee')

console.log(sayHello('Eye'));
console.log(sayHi('Much'));
console.log(sumNumber(5, 5));

console.log(iotwee.sayHey('hom'));