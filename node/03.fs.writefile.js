//导入fs模块
const fs = require('fs');
//调用
//  参数一：存放文件的路径
//  参数二：读取文件采用的编码格式，一般默认指定为utf - 8
//  参数三：回调函数，拿到读取失败或成功的结果 err(成功为null 错误为错位对象)  dataStr(成功为内容 错位为undefined)
fs.writeFile('2.txt', 'dsssadd', function (err) {
    if (err) {
        return console.log('读取失败' + err.message); //return 执行完 结束语句，不会执行下一句
    }
    console.log('写入成功');

})