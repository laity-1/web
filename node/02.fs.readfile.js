//导入fs模块
const fs = require('fs');
//调用
//  参数一：读取文件的路径 
//  参数二：读取文件采用的编码格式，一般默认指定为utf - 8
//  参数三：回调函数，拿到读取失败或成功的结果 err(成功为null 错误为错位对象)  dataStr(成功为内容 错位为undefined)
fs.readFile('1.js', 'utf-8', function (err, dataStr) {
    if (err) {
        console.log('读取失败' + err.message);
    } else {
        console.log('读取成功' + dataStr);
    }
})