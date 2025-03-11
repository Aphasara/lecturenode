//การสร้างโมดูลแบบ esmodule แบบที่2
//เราสามารถสร้างโมดูลแบบ esmodule ได้โดยใช้ export และ import แทน module.exports และ require ตามลำดับ
const dataA = 'hello...'

function sayHi() {
  console.log('hi...')
}

const sawasdee = (yourname) => {
  console.log(`sawasdee ${yourname}`)
}

export default{dataA,sayHi,sawasdee}