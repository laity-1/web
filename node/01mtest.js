//注意：在使用require加载用户自定义模块期间，可以省略.js的后缀名
//在外界使用require导入一个自定义模块的时候，得到的成员；就是那个模块中，通过module.exports指向的那个对象
const m1 = require('./01m.js')
console.log(m1);
