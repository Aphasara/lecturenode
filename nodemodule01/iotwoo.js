//let เปลี่ยนค่าได้ const เปลี่ยนค่าไม่ได้
const data2 = 'Welcome'

const sayGoodbye = (fname, lname) => {
    console.log(`ลาก่อน ${fname} ${lname}`);
}

const sumNumber = (a, b) => a+b

module.exports.data2 = data2
module.exports.sayGoodbye = sayGoodbye
module.exports.sumNumber = sumNumber