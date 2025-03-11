//การใช้งาน esmodule แบบ 3
//ตัวไหนที่เป็น default จะใช้ import โดยไม่ต้องใส่ {} แต่ตัวที่ไม่ใช่ default จะต้องใส่ {}
import sayHi, { dataA, sawasdee } from "./my-module-d";

console.log(dataA);
sayHi();
sawasdee("Aphasara");