//导入自定义格式化的模块
const Time = require('./npm时间自定义模块')
//调用方法，进行时间的格式化
const dt = new Date();
console.log(dt);
const newdt = Time.dateFormat(dt)
console.log(newdt);