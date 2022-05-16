// 在一个自定义模块中，默认情况下，module.exports={}
console.log('自定义模块');
const m = 'aa'
console.log(m);
//向module.exports对象上挂载属性和方法
module.exports.username = 'zs';
module.exports.sayHello = function () {
    console.log('hello');
}
module.exports.m = m;
console.log(exports);
console.log(module.exports);
console.log(exports === module.exports);