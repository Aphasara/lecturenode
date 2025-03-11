//การสร้างโมดูลแบบ commonjs
const dataA = 'hello...'

function sayHi() {
  console.log('hi...')
}

const sawasdee = (yourname) => {
  console.log(`sawasdee ${yourname}`)
}

//จะเอาไปใช้ที่อื่นได้ก็ต้อง export ออกไป
module.exports = {
  dataA,
  sayHi,
  sawasdee
}

//หรือ
// module.exports.dataA = dataA
// module.exports.sayHi = sayHi
// module.exports.sawasdee = sawasdee