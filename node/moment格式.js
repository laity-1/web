//npm install moment  或者 npm i moment moment包名
//导入的名称，就是安装时候的名称
const moment = require('moment')
const dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt);