//การสร้างโมดูลแบบ esmodule
//เราสามารถสร้างโมดูลแบบ esmodule ได้โดยใช้ export และ import แทน module.exports และ require ตามลำดับ
const dataA = 'hello...'

function sayHi() {
  console.log('hi...')
}

const sawasdee = (yourname) => {
  console.log(`sawasdee ${yourname}`)
}

export {dataA,sayHi,sawasdee}