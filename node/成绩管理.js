const fs = require('fs');
const path = require('path');
fs.readFile('成绩.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取失败' + err.message);
    }
    console.log('读取成功' + dataStr);
    const arr = dataStr.split(' ') //空格分割
    console.log(arr);
    const arrNew = [];
    arr.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    const newStr = arrNew.join('\r\n') //合并成字符串
    console.log(newStr);
    //__dirname 表示当前文件所在的目录
    fs.writeFile(path.join(__dirname, '成绩ok.txt'), newStr, function (err) {
        if (err) {
            return console.log('写入失败' + err.message);
        }
        console.log('写入成功');
    })
})