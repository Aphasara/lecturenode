//การใช้งานโมดูลแบบ commonjs (แบบที่2)
const { dataA, sayHi, sawasdee } = require('./my-module-a')

//ต้องการใช้งานคำสั่งไหนก็เรียกมาใช้งานได้เลย
console.log(dataA)
sayHi()
sawasdee('Aphasara')